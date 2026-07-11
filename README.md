# Phân tích Mô hình 3 khối

Dự án bao gồm 5 bài tập JavaScript cơ bản. Mỗi bài được phân tích theo mô hình **3 khối (Input - Process - Output)** trước khi cài đặt chức năng. Các phép tính và kiểm tra dữ liệu được hiện thực trong `exercies.js`. :contentReference[oaicite:0]{index=0}

---

# Bài 1. Tính tiền lương nhân viên

## 🔹 Input

- Lương một ngày
- Số ngày làm

## 🔹 Process

- Kiểm tra dữ liệu nhập có hợp lệ.
- Chuyển dữ liệu sang kiểu `Number`.
- Tính:

```text
Lương = Lương một ngày × Số ngày làm
```

## 🔹 Output

- Tổng tiền lương của nhân viên.

---

# Bài 2. Tính giá trị trung bình

## 🔹 Input

- 5 số thực.

## 🔹 Process

- Kiểm tra từng giá trị nhập.
- Chuyển từng giá trị sang kiểu `Number`.
- Tính tổng của 5 số.
- Tính:

```text
Trung bình = Tổng / 5
```

## 🔹 Output

- Giá trị trung bình của 5 số.

---

# Bài 3. Quy đổi tiền

## 🔹 Input

- Số tiền USD.

## 🔹 Process

- Kiểm tra dữ liệu hợp lệ.
- Chuyển sang kiểu `Number`.
- Quy đổi theo tỷ giá:

```text
1 USD = 23,500 VND
```

- Định dạng kết quả theo chuẩn tiền tệ Việt Nam.

## 🔹 Output

- Số tiền VND sau khi quy đổi.

---

# Bài 4. Tính diện tích và chu vi hình chữ nhật

## 🔹 Input

- Chiều dài.
- Chiều rộng.

## 🔹 Process

- Kiểm tra dữ liệu hợp lệ.
- Chuyển sang kiểu `Number`.
- Tính:

```text
Diện tích = Dài × Rộng

Chu vi = (Dài + Rộng) × 2
```

## 🔹 Output

- Chu vi hình chữ nhật.
- Diện tích hình chữ nhật.

---

# Bài 5. Tính tổng hai ký số

## 🔹 Input

- Một số nguyên có đúng 2 chữ số.

## 🔹 Process

- Kiểm tra dữ liệu hợp lệ.
- Kiểm tra số là số nguyên và có đúng 2 chữ số.
- Tách:

```text
Hàng chục = floor(n / 10)

Hàng đơn vị = n % 10
```

- Tính:

```text
Tổng = Hàng chục + Hàng đơn vị
```

## 🔹 Output

- Tổng của hai chữ số.

---

# Ghi chú

Toàn bộ các bài tập đều sử dụng chung quy trình:

```text
Người dùng nhập dữ liệu
        │
        ▼
Kiểm tra dữ liệu hợp lệ
        │
        ▼
Thực hiện tính toán
        │
        ▼
Hiển thị kết quả lên giao diện
```

Ngoài ra, dự án sử dụng một hàm `validateNumber()` để kiểm tra dữ liệu đầu vào trước khi xử lý, đảm bảo chỉ chấp nhận các giá trị số hợp lệ và không âm. :contentReference[oaicite:1]{index=1}