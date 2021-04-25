import React from 'react'
import FlechaIzquierda from '../../img/Icon feather-arrow-left-circle.svg'
import FlechaDerecha from '../../img/Icon feather-arrow-right-circle.svg'

const Products = () => {
    return (
        <section className="Products" id="Products-button">
        
        <div className="productos">
            <div className="imagencontainer">
            
                <img src= {FlechaIzquierda} alt='flecha' className="flecha-izquierda"  title="Flecha izquierda" />
                <img src= {FlechaDerecha} alt='flecha' className="flecha-derecha" title="Flecha derecha" />
            </div>

            <p className="sedut">
                <span className="span"> Sed us perspiciatis </span><br/>
                <span className="parrafo70"> Nemo Enim</span><br/>
                    <span className="span1"> Sed utis perspiciatis omnitis iste natus error sit <br/>
                    voluptatem accusantim doloremque laudantium, <br/> totam rem aperiam
                    </span>
            </p>
            


        </div>

    </section>
    )
}

export default Products;