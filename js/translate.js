const translations = {
  en: {
      home: "Home",
      about: "About",
      service: "Service",
      pages: "Pages",
      contact: "Contact",
      appointment: "Appointment",
      openingHours: "Opening Hours: Mon - Tues : 6.00 am - 10.00 pm, Sunday Closed",
      keepTeethHealthy: "Keep Your Teeth Healthy",
      qualityTreatment: "Take The Best Quality Dental Treatment",
      contactUs: "Contact Us",
      pricingPlan: "Pricing Plan",
      ourDentist: "Our Dentist",
      testimonial: "Testimonial"
  },
  vi: {
      home: "Trang Chủ",
      about: "Giới Thiệu",
      service: "Dịch vụ",
      pages: "Thư Viện",
      contact: "Liên Hệ",
      appointment: "Đặt Lịch Hẹn",
      openingHours: "Giờ mở cửa: Thứ 2 - Thứ 3: 6:00 sáng - 10:00 tối, Chủ nhật đóng cửa",
      keepTeethHealthy: "Giữ Răng Khỏe Mạnh",
      qualityTreatment: "Nhận Điều Trị Nha Khoa Chất Lượng Tốt Nhất",
      contactUs: "Liên Hệ",
      pricingPlan: "Bảng Giá Dịch Vụ",
      ourDentist: "Đội Ngũ Nha Sĩ",
      testimonial: "Đánh Giá Dịch Vụ"
  }
};

function changeLanguage(lang) {
  // Update HTML lang attribute
  document.documentElement.lang = lang;
  
  // Update all translatable elements
  document.querySelector('.nav-item.nav-link.active').textContent = translations[lang].home;
  document.querySelectorAll('.nav-item.nav-link')[1].textContent = translations[lang].about;
  document.querySelectorAll('.nav-item.nav-link')[2].textContent = translations[lang].service;
  document.querySelector('.nav-link.dropdown-toggle').textContent = translations[lang].pages;
  document.querySelectorAll('.nav-item.nav-link')[3].textContent = translations[lang].contact;
  
  // Update dropdown menu items
  document.querySelectorAll('.dropdown-item')[0].textContent = translations[lang].pricingPlan;
  document.querySelectorAll('.dropdown-item')[1].textContent = translations[lang].ourDentist;
  document.querySelectorAll('.dropdown-item')[2].textContent = translations[lang].testimonial;
  document.querySelectorAll('.dropdown-item')[3].textContent = translations[lang].appointment;
  
  // Update appointment button
  document.querySelector('.btn.btn-primary.py-2.px-4.ms-3').textContent = translations[lang].appointment;
  
  // Update opening hours
  document.querySelector('.py-2').textContent = translations[lang].openingHours;
  
  // Update carousel content
  document.querySelectorAll('.text-uppercase.mb-3').forEach(element => {
      element.textContent = translations[lang].keepTeethHealthy;
  });
  
  document.querySelectorAll('.display-1.text-white.mb-md-4').forEach(element => {
      element.textContent = translations[lang].qualityTreatment;
  });
  
  document.querySelectorAll('.btn.btn-primary.py-md-3.px-md-5.me-3').forEach(element => {
      element.textContent = translations[lang].appointment;
  });
  
  document.querySelectorAll('.btn.btn-secondary.py-md-3.px-md-5').forEach(element => {
      element.textContent = translations[lang].contactUs;
  });
}
