import React from 'react'

const about = () => {
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
                    <a class="nav-link" href="contact.html">Contact</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
<section id="about">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
    <h1 class="text-info">Welcome to NOOL</h1>

        
        <h4>Our Categories:</h4>
        
        <p> <h3 class="text-danger">1.Philosophy </h3> elve deep into the world of Tamil and global philosophical works. From ancient wisdom to modern thoughts, explore books that challenge and inspire.</p>
        
        <p> <h3 class="text-danger">2.Tamil Literature </h3>Celebrate the beauty and heritage of Tamil literature. Whether it's classic Sangam poetry or contemporary writings, discover the essence of Tamil through its literary treasures.</p>
        
        <p> <h3 class="text-danger">3.Indian History</h3>Explore the rich history of India through Tamil perspectives. Our collection spans ancient civilizations, medieval times, and modern history, shedding light on India's diverse cultural and historical landscape.</p>
        
        <p> <h3 class="text-danger">4.Poems</h3> Jothrough the lyrical beauty of Tamil poetry. From traditional verses to modern-day poets, find collections that resonate with emotions, culture, and identity.</p>
        
        <p> <h3 class="text-danger">5.Children's </h3> Delight young minds with stories that entertain, educate, and inspire. From folk tales to contemporary adventures, these stories are perfect for young readers.</p>
        
        <p><h3 class="text-danger">6.Autobiographies</h3>Get inspired by the lives of great personalities. Our collection of autobiographies includes influential figures from Tamil Nadu and beyond, offering insights into their journeys, struggles, and triumphs.</p>
    </div>
</div>
</div>
</section>
<footer class="py-3">
    <div class="container">
        <div class="col-md-12">
            <p class="text-center m-0">Copyright: 2024. Designed and Developed by Syed_Imran❤️</p>
        </div>
    </div>
</footer>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
    crossorigin="anonymous"></script>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script>
    AOS.init();
</script></>
  )
}

export default about