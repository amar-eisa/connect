# المرحلة الأولى: البناء (Build Stage)
FROM node:20-alpine as build

WORKDIR /app

# نسخ ملفات تعريف المكتبات
COPY package.json package-lock.json ./

# أو إذا كنت تستخدم bun (لاحظت وجود bun.lockb في قائمة الملفات السابقة)
# COPY package.json bun.lockb ./

# تثبيت المكتبات
RUN npm ci

# نسخ باقي ملفات المشروع
COPY . .

# بناء المشروع (سينشئ مجلد dist)
RUN npm run build

# المرحلة الثانية: التشغيل (Production Stage)
FROM nginx:alpine

# نسخ إعدادات Nginx (سنقوم بإنشائها في الخطوة التالية)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# نسخ ملفات الـ Build من المرحلة الأولى إلى مجلد Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# فتح المنفذ 80 (داخل الحاوية)
EXPOSE 80

# تشغيل Nginx
CMD ["nginx", "-g", "daemon off;"]