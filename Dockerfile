# المرحلة الأولى: البناء (Build Stage)
FROM node:20-alpine as build

WORKDIR /app

# نسخ ملفات تعريف الحزم
COPY package.json package-lock.json ./

# تثبيت المكتبات نظيفاً
RUN npm ci

# نسخ باقي ملفات الكود
COPY . .

# استقبال متغيرات البيئة أثناء البناء (ضروري لـ Vite)
ARG VITE_SUPABASE_URL
ARG VITE_SUPABASE_PUBLISHABLE_KEY
ARG VITE_SUPABASE_PROJECT_ID

# تعيينها كمتغيرات بيئة للنظام ليراها Vite أثناء الـ Build
ENV VITE_SUPABASE_URL=$VITE_SUPABASE_URL
ENV VITE_SUPABASE_PUBLISHABLE_KEY=$VITE_SUPABASE_PUBLISHABLE_KEY
ENV VITE_SUPABASE_PROJECT_ID=$VITE_SUPABASE_PROJECT_ID

# بناء المشروع (سينتج مجلد dist)
RUN npm run build

# المرحلة الثانية: التشغيل (Production Stage)
FROM nginx:alpine

# نسخ إعدادات Nginx المخصصة
COPY nginx.conf /etc/nginx/conf.d/default.conf

# نسخ ملفات البناء من المرحلة الأولى
COPY --from=build /app/dist /usr/share/nginx/html

# فتح المنفذ 80 داخل الحاوية
EXPOSE 80

# تشغيل Nginx
CMD ["nginx", "-g", "daemon off;"]