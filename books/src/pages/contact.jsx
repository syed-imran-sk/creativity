import React from 'react'
import '../style/contact.css'

const contact = () => {
  return (
    <>
     <nav class="navbar navbar-expand-lg navbar-light bg-light py-4 text-uppercase border border-bottom border-warning sticky-top">
    <div class="container">
        <a class="navbar-brand fs-4" href="#"> <img src="./image/logo/tamil-calligraphy-t-shirt-removebg-preview.png" alt="" height="70px" width="80px"/> NOOL</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-4">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                </li>
               
                <li class="nav-item">
                    <a class="nav-link" href="about.html">About</a>
                </li>
                
                <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<div class="container">
<div class="row justify-content-center">
    <div class="col-md-8">
        <div class="contact-form">
            <h2 class="contact-header">Contact Us</h2>
            <form  method="post" >
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="name" name="name" required/>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" name="email" required/>
                </div>
                <div class="mb-3">
                    <label for="message" class="form-label">Message</label>
                    <textarea class="form-control" id="message" name="message" rows="4" required></textarea>
                </div>
                <div class="mb-3">
                    <label for="bookUpload" class="form-label">Upload Book</label>
                    <input type="file" class="form-control" id="bookUpload" name="bookUpload" accept=".pdf,.epub,.docx" required/>
                </div>
                <button type="submit" class="btn btn-primary w-100">Submit</button>
            </form>
        </div>

        
        <div class="contact-info mt-5">
            <h3>Contact Information</h3>
            <p><i class="fas fa-envelope"></i> Email: syedimranskofficial@gamil.com</p>
            <p><i class="fas fa-phone"></i> Phone: +91 7548891770</p>
            <p><i class="fas fa-map-marker-alt"></i> Location: Chennai, Tamil Nadu, India</p>

           
            <div class="social-icons">
                <a href="https://www.facebook.com/yourprofile" target="_blank"><i class="fab fa-facebook"></i></a>
                <a href="https://wa.me/7548891770" target="_blank"><i class="fab fa-whatsapp"></i></a>
                <a href="https://www.instagram.com/the_maverick_immu/?__pwa=1" target="_blank"><i class="fab fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/yourprofile" target="_blank"><i class="fab fa-linkedin"></i></a>
            </div>
        </div>
    </div>
</div>
</div>
<footer class="py-3">
<div class="container">
    <div class="col-md-12">
        <p class="text-center m-0">Copyright: 2024. Designed and Developed by Syed_Imran❤️</p>
    </div>
    <div>
        <p>Vankkam da mapla chennai la irunthu</p>
    </div>
</div>
</footer>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/js/all.min.js"></script>
</>

  )
}

export default contact