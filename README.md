**Chương trình demo hệ thống tìm việc làm**

---

**1. Giới thiệu**

 Hệ thống tìm việc làm giúp kết nối người tìm việc với nhà tuyển dụng. Hệ thống bao gồm:

- **Frontend**: Phát triển bằng React.
- **Backend**: Sử dụng Spring Boot.
- **Database**: Sử dụng  MySQL.

---

**2. Chức năng chính**

- Người dùng:
  - Đăng ký tài khoản
  - Đăng nhập

* **Ứng viên:**

  - Tìm kiếm tin tuyển dụng theo tiêu chí.
  - Xem chi tiết tin tuyển dụng
  - Ứng tuyển.
  - Quản lý danh sách ứng tuyển

* **Nhà tuyển dụng:**

  - Đăng tin tuyển dụng.
  - Quản lý tin tuyển dụng
  - Quản lý danh sách ứng viên.

---

**3. Cách thức triển khai**

**3.1. Môi trường cài đặt**

- **Frontend:** Node.js v18+, npm/yarn.
- **Backend:** Java 17+, Maven/Gradle.
- **Database:** MySQL.

**3.2. Tải mã nguồn**
- Tải mã nguồn từ github: `git clone <https://github.com/khuatbaonguyen123/job-seeker.git>`

**3.2. Cài đặt Frontend**
- Chuyển đến thư mục frontend bằng lệnh: `cd job-seeker`.
- Cài đặt package: `npm install`
- Chạy dự án: `npm start`

**3.3. Cài đặt Backend**
- Cấu hình file `application.properties` với **username** và **password** của bạn:
  ```properties
  spring.application.name=job-seeker
  spring.datasource.url=jdbc:mysql://localhost:3306/job_seeker
  spring.datasource.username=root
  spring.datasource.password=password
  spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
  spring.jpa.hibernate.naming.physical-strategy=org.hibernate.boot.model.naming.PhysicalNamingStrategyStandardImpl
  ```
- Build và chạy: `./mvnw spring-boot:run`

**3.4. Cài đặt Database**
- Chạy file script khởi tạo từ file [job_seeker.sql](https://github.com/khuatbaonguyen123/job-seeker/blob/main/job_seeker.sql).

**3.5. Truy cập đường dẫn:** `https://localhost:3000`

