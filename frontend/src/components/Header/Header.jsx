
import './Header.css'



const Header = () => {

    
    return (
      <div className="header">
        <div className="header-contents">
          {/* <div className="search-bar">
            <input
              type="text"
              placeholder="Search for your faviorite dish,cuisine etc"
              className="search-input"
            />

            <button className="search-icon">
              <i className="fa fa-search"></i> {/* FontAwesome Icon */
          //   </button>
          // </div> */}
          }
    <div className="search-bar">
          <input
         type="text"
         placeholder="Search"
         className="search-input"
       /><button  className="search-icon" >
         <i className="fa fa-search"></i> {/*FontAwesome Icon */}
           </button>    
           
    </div>  


          <h2>Order Smart Order Fast</h2>
          <p>
            Your Command Choose from a diverse menu featuring a delectable array
            of dishes crafted with the finest ingredients and culinary
            expertise. Our mission is to satisfy your cravings and elevate your
            dining experience, one delicious meal at a time.
          </p><a href="#explore-menu">
          <button >View Menu</button></a>
        </div>
      </div>
    );
}

export default Header
