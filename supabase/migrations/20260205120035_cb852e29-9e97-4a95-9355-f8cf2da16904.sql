-- Add DELETE policy to restrict deletion to admins only
CREATE POLICY "Only admins can delete contact requests" 
ON public.contact_requests 
FOR DELETE 
USING (has_role(auth.uid(), 'admin'::app_role));