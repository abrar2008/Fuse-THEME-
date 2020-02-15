import React  from 'react';



function AddANewSiteApp(props)
{
  return (
    <div className="site-scan">
      <form className="flex">
        <h1>Add a Site</h1>
        <input type="text"/>
        <button>Start Scan</button>
      </form>

      <div className="project">
        <div className="item">
          <span>4/3</span>
          <font>Projects Available</font>
          <div className="tooltip">
            <i class="material-icons">info</i>
            <span class="tooltiptext">Your plan currently includes 4 projects to save all your Website reports on our server.</span>
          </div>
          <button>BUY MORE PROJECTS</button>
        </div>
      </div>

      <div className="re-addSite flex">
        <input type="checkbox"/>
        <span>Re-add the site or file to the queue if it is completed!</span>
      </div>

      <div className="scan-filter">
        <header>
          <div className="left">
            <font>SCAN FILTERS</font>
            <span className="selected-filter">8 / 13</span>
            <span>Selected</span>
          </div>

          <div className="right">
            <button className="apply">APPLY FILTER</button>
            <button className="close">X</button>
          </div>
        </header>

        <section>
          <div className="item flex">
            <span className="active one-title"><input type="checkbox" checked/>Browser</span>

            <span className="active"><input type="checkbox" checked/>Chrome</span>

            <span><input type="checkbox"/>Firefox</span>

            <span><input type="checkbox"/>Safari</span>
          </div>

          <span className="title"><input type="checkbox" checked/>Apple Phones</span>
          <div className="item i-active">
            <span>iPhone 6</span>

            <span>iPhone 6s</span>

            <span>iPhone 6s Plus</span>

            <span>iPhone 7</span>


            <span>iPhone 7 Plus</span>

            <span>iPhone 8</span>

            <span>iPhone 8 Plus</span>

            <span>iPhone X</span>
          </div>


          <span className="title"><input type="checkbox"/>Apple Tablets</span>
          <div className="item">
            <span>iPad Mini 4</span>
            <span>iPad Air 2</span>
            <span>iPad Pro (12.9-inch)</span>
            <span>iPad Pro (12.7-inch)</span>
            <span>iPad Pro 12.9-inch (2nd gen)</span>
          </div>

          <span className="title"><input type="checkbox"/>Android Phones</span>
          <div className="item">
            <span>Google Pixel 3 XL</span>
            <span>Galaxy S7</span>
            <span>Galaxy S7 Edge</span>
            <span>LG G5</span>

            <span>Galaxy Note 5</span>
            <span>Google Pixel XL</span>
            <span>Google Pixel 2 XL</span>
            <span>Nexus 6P</span>

            <span>Galaxy S8</span>
            <span>Galaxy S8+</span>
            <span>Galaxy S9</span>
            <span>Galaxy S9+</span>

            <span>Galaxy Note 9</span>
          </div>


          <span className="title"><input type="checkbox"/>Android Tablets</span>
          <div className="item">
            <span>Nexus 9</span>
            <span>Chromebook Pixel</span>
          </div>


          <span className="title"><input type="checkbox"/>Laptop</span>
          <div className="item">
            <span>14" Notebook</span>
            <span>15.6" Laptop</span>
            <span>18.5" monitor</span>
          </div>


          <span className="title"><input type="checkbox"/>Desktop</span>
          <div className="item">
            <span>21.5" monitor</span>
            <span>23" monitor</span>
            <span>1080p TV</span>
          </div>

        </section>
      </div>

    </div>
  );
}


export default AddANewSiteApp;
