import React from 'react'
import styles from "../components/mid.css"

const mid = () => {
  

  return (
    <main>
      <div className='offroadimg'><img className='offroadimg1' src="https://ic.carid.com/pages/off-road/slides2/off-road_0.jpg" alt="" /></div>
      <div className='welcome'>Welcome To The OFF-ROAD World<br />Feel the Fear</div><br />

      <div className='box1'>
        <div className='vb1'><iframe frameBorder={0} height={400} width={580}
          src="https://www.youtube.com/embed/uooJ1oWuHlQ?autoplay=1&mute=1"
        />
        </div>
        <div className='vb2'><iframe frameBorder={0} height={400} width={580}
          src="https://www.youtube.com/embed/AUSiU-FeM8M?autoplay=1&mute=1"
        />
        </div>
      </div>
      <div className='box2'>
        <div className='vb3'><iframe frameBorder={0} height={400} width={580}
          src="https://www.youtube.com/embed/U5dvYRmPvrc?autoplay=1&mute=1"
        />
        </div>
        <div className='vb4'><iframe frameBorder={0} height={400} width={580}
          src="https://www.youtube.com/embed/HU0H7z6GROw?autoplay=1&mute=1"
        />
        </div>
      </div>
      <div className='line'></div>

      <div className='car'>Available Cars</div>

      <div className="card">

        <div className="container">
          <h4><b>Toyota Fortuner</b></h4>
          <p>With Off-Road Tyres 4X4 Price 25000 Rupees</p>
        </div>
        <div className="container">
          <h4><b>Mahindra Thar</b></h4>
          <p>With Off-Road Tyres 4X4 Price 15000 Rupees</p>
        </div>
      </div><br />
      <div className="card">
        <div className="container">
          <h4><b>Mahindra Scorpio</b></h4>
          <p>With Off-Road Tyres 4X2 Price 8000 Rupees</p>
        </div>
        <div className="container">
          <h4><b>Jeep Wrangler</b></h4>
          <p>With Off-Road Tyres 4X4 Price 60000 Rupees</p>
        </div></div><br />
      <div className="card">
        <div className="container">
          <h4><b>Maruti Suzuki Gypsy</b></h4>
          <p>AWith Off-Road Tyres 4X2 Price 10000 Rupees</p>
        </div>
        <div className="container">
          <h4><b>Tata safari</b></h4>
          <p>With Off-Road Tyres 4X4 Price 20000 Rupees</p>
        </div></div><br />
      <div className='line'></div>



      <div className='car'>Parts and Accessories</div>
      <div className='order'>
        <div className='od'><img className='imgod' src="https://www.adrenalinoffroadcentre.com.au/wp-content/uploads/2022/08/Adrenaline-Offroad-Centre-4WD-shop-in-Narellen-that-sells-and-installs-Piak-bull-bars.jpg" alt="" />
          <div className='pa'><a href="/contact" className='pa'> Bumpers</a> </div>
        </div>
        <div className='od'><img className='imgod' src="https://www.team-bhp.com/sites/default/files/pictures2021/ford-endeavour-4x4-tyres-3.jpg" alt="" />
          <div className='pa'><a href='/contact' className='pa' >OFF-ROAD Tryes </a></div>
        </div>
        <div className='od'><img className='imgod' src="https://cdn11.bigcommerce.com/s-g4hxf75d/images/stencil/1280x1280/products/4204/44129/image__75258.1668995848.png?c=2?imbypass=on" alt="" />
          <div className='pa'><a href='/contact' className='pa'>Led Lights </a></div>
        </div>
        <div className='od'><img className='imgod' src="https://images.squarespace-cdn.com/content/v1/61d328161b7c47412a4de73a/1ad8ddbe-511f-465a-b492-e1c008980fc2/IMG_4384.jpg" alt="" />
          <div className='pa'><a href='/contact' className='pa' >Bumper Stringer </a></div>
        </div>

      </div>
      <div className='order2'>
        <div className='od1'><img className='imgod1' src="https://m.media-amazon.com/images/I/812A8lPIq9L._AC_UF350,350_QL80_.jpg" alt="" />
          <div className='pa'> <a href="/contact" className='pa'>Recovery Board </a></div>
        </div>
        <div className='od1'><img className='imgod1' src="https://www.lematec-tools.com/images/72907" alt="" />
          <div className='pa'> <a href="/contact" className='pa'>Tyre Infaltor </a></div>
        </div>
        <div className='od1'><img className='imgod1' src="https://5.imimg.com/data5/SELLER/Default/2022/6/SC/XX/ZC/40682452/img-4194-500x500.JPG" alt="" />
          <div className='pa'> <a href="/contact" className='pa'>Roof Carrier </a></div>
        </div>
        <div className='od1'><img className='imgod1' src="https://www.nomadadventuresoverland.com/img/x4/pic1.jpg" alt="" />
          <div className='pa'> <a href="/contact" className='pa'>Tent </a></div>
        </div>
      </div>
      <div className='book'>
        <div className='bapp'>
          Get Your Vehical Now by Booking Online
        </div>
        <div>
        <a href='/form'><button className='bbtn'>Book Now</button></a>
        </div>
      </div> <br />
      <div className='ab'>
        <div className='app'>
          You Can also Download our Application for Andriod and Ios
        </div>
        <div>
          <button type='submit' className='btn'>Download Now</button>
        </div>
      </div>

      <div className='fm'>
        <div className='fmm'><h2>Latest News</h2><div className="if"><br />Events<br /><br />Awards<br /><br />New Collections</div></div>
        <div className='fmm'><h2>Useful Links</h2><div className="if"><br />Privacy and Policy<br></br><br />Terms and Conditions<br /><br />Feedback</div></div>
        <div className='fmm'><h2>More Bout Us</h2><div className="if"><br />Instagram<br /><br />Facebook<br /><br />Twiteer</div> </div>
      </div>
    </main>
  )
}

export default mid
