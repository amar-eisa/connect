-- Add validation constraints to contact_requests table
-- Using validation triggers instead of CHECK constraints for better flexibility

-- Create validation function for contact_requests
CREATE OR REPLACE FUNCTION public.validate_contact_request()
RETURNS TRIGGER
SECURITY INVOKER
SET search_path = public
LANGUAGE plpgsql
AS $$
BEGIN
  -- Validate full_name length (2-100 characters)
  IF char_length(TRIM(NEW.full_name)) < 2 OR char_length(TRIM(NEW.full_name)) > 100 THEN
    RAISE EXCEPTION 'Full name must be between 2 and 100 characters';
  END IF;
  
  -- Validate email format
  IF NEW.email !~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' THEN
    RAISE EXCEPTION 'Invalid email format';
  END IF;
  
  -- Validate email length
  IF char_length(NEW.email) > 255 THEN
    RAISE EXCEPTION 'Email must be less than 255 characters';
  END IF;
  
  -- Validate phone length (7-20 characters)
  IF char_length(TRIM(NEW.phone)) < 7 OR char_length(TRIM(NEW.phone)) > 20 THEN
    RAISE EXCEPTION 'Phone number must be between 7 and 20 characters';
  END IF;
  
  -- Validate message length if provided
  IF NEW.message IS NOT NULL AND char_length(NEW.message) > 5000 THEN
    RAISE EXCEPTION 'Message must be less than 5000 characters';
  END IF;
  
  -- Validate project_type is from allowed values
  IF NEW.project_type NOT IN ('نظام إدارة مؤسسة', 'موقع إلكتروني', 'تطبيق جوال', 'نظام نقاط البيع (POS)', 'نظام إدارة المخزون', 'تطوير نظام قائم', 'أخرى') THEN
    RAISE EXCEPTION 'Invalid project type';
  END IF;
  
  -- Trim whitespace from text fields
  NEW.full_name := TRIM(NEW.full_name);
  NEW.phone := TRIM(NEW.phone);
  NEW.email := LOWER(TRIM(NEW.email));
  IF NEW.message IS NOT NULL THEN
    NEW.message := TRIM(NEW.message);
  END IF;
  
  RETURN NEW;
END;
$$;

-- Create trigger for validation
DROP TRIGGER IF EXISTS validate_contact_request_trigger ON public.contact_requests;
CREATE TRIGGER validate_contact_request_trigger
  BEFORE INSERT OR UPDATE ON public.contact_requests
  FOR EACH ROW
  EXECUTE FUNCTION public.validate_contact_request();

-- Also fix the update_updated_at_column function to have proper security settings
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
SECURITY INVOKER
SET search_path = public
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;