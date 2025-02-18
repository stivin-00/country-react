import React from "react";
import { useState } from "react";
import './index.css'


export default function Country(props) {


    if(props.isInfoShown === false && props.displayTheRest){
         return (
             <article onClick={()=> props.isClicked(props.id)}
                      className={`h-72 shadow-md w-full ${!props.darkMode && 'border'} ${props.darkMode && 'bg-darkModeElements'}`}>


                        <div className="w-full h-[60%]">
                            <img src={props.flag} alt="flag" className="w-full object-cover h-full " />
                        </div>
                    
                    <div className="space-y-2 h-[40%] flex flex-col px-2 relative justify-center">
                        <h1 className="font-bold text-sm">
                            {props.name}
                        </h1>
                        <section className="text-xs md:text-sm space-y-1">
                            <h2 className="">
                                Population :<span className="text-lightModeInput"> {props.population}</span>
                            </h2>
                            <h2 className="">
                                Region : <span className="text-lightModeInput"> {props.region}</span>
                            </h2>
                            <h2 className="">
                                Capital : <span className="text-lightModeInput"> {props.capital}</span>
                            </h2>
                        </section>
                        {props.isInfoShown === false && <button className=" absolute bottom-1/2 translate-y-1/2 right-3 text-zinc-400 font-semibold text-xs md:text-sm">
                            <i className="fa-solid fa-angles-right"></i>
                        </button>}
                        
                    </div>
                </article>
                
    )
    }


    if(props.isInfoShown){
        return (
            <div className={`${props.darkMode ? 'bg-darkModeElements' : 'bg-darkModeTextAndLightModeElements'}   overflow-hidden absolute w-full top-0 min-h-screen left-0 right-0 space-y-12 p-12 md:p-24`}>
                    <button 
                            onClick={()=> {
                                props.reset(props.id)
                            }}
                            className="px-8 py-1 space-x-2 flex items-center border-2 hover:bg-sky-200">
                        <i className="fa-solid fa-arrow-left-long"></i>
                        <p>Back</p>
                    </button>

                    <section className="flex flex-col md:items-center md:flex-row md:space-x-8 space-y-10 md:space-y-0">

                        <img src={props.flag} alt="" className="md:w-1/2 w-full h-64 md:h-72 object-cover border shadow-md" />


                        <div className="text-sm md:w-1/2 w-full space-y-6 py-2">
                            <h1 className="font-bold text-2xl md:text-4xl">
                                {props.name}
                            </h1>
                            <article className="flex flex-col md:flex-row md:justify-between space-y-4 md:space-y-0">
                                    <div className="space-y-1">
                                        <h3>Native Name : <span className={`${props.darkMode ? 'text-darkModeTextAndLightModeElements' : 'text-lightModeInput'}`}>{props.nativeName}</span></h3>
                                        <h3>Population : <span className={`${props.darkMode ? 'text-darkModeTextAndLightModeElements' : 'text-lightModeInput'}`}>{props.population}</span></h3>
                                        <h3>Region : <span className={`${props.darkMode ? 'text-darkModeTextAndLightModeElements' : 'text-lightModeInput'}`}>{props.region}</span></h3>
                                        <h3>Sub Region : <span className={`${props.darkMode ? 'text-darkModeTextAndLightModeElements' : 'text-lightModeInput'}`}>{props.subregion}</span></h3>
                                        <h3>Capital : <span className={`${props.darkMode ? 'text-darkModeTextAndLightModeElements' : 'text-lightModeInput'}`}>{props.capital}</span></h3>
                                    </div>
                                    <div className="space-y-1">
                                        <h3>Top Level Domain : <span className={`${props.darkMode ? 'text-darkModeTextAndLightModeElements' : 'text-lightModeInput'}`}>{props.topLevel}</span></h3>
                                        <h3>Currency : <span className={`${props.darkMode ? 'text-darkModeTextAndLightModeElements' : 'text-lightModeInput'}`}></span></h3>
                                        <h3>Languages : <span className={`${props.darkMode ? 'text-darkModeTextAndLightModeElements' : 'text-lightModeInput'}`}></span></h3>
                                    </div>
                                    
                            </article>

                            <h3 className="w-full">Border Countries : 
                                <span className="text-darkModeTextAndLightModeElements capitalize px-3 py-1 mx-2">
                                {props.borderCountries && props.borderCountries.length > 1 ?  props.borderCountries.join(' , '): props.borderCountries ?  props.borderCountries : ''}</span>
                            </h3>
                        </div>

                    </section>
                </div>
        )
    }
}