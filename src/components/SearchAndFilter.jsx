import React from "react";


const SearchAndFilter = (props) => {
    return (
        <div className='flex flex-col gap-8 py-8 lg:flex-row justify-between'>
            <div className='lg:[40%] overflow shadow-md relative'>
                <input 
                    type='text'
                    name='search'
                    placeholder='Search for any Country'
                    onChange={}
                    className='w-full h-full px-6 py-3 dark:bg-[#2B3844] bg-white'
                />

            </div>
            <select 
                name="filter"
                id="continents"
                onChange={}
                className='w-[60%] lg:w-[20%] outline-none px-4 py-3'
             >
                <option value="" >Filter By Region</option>
                <option value="africa">Africa</option>
                <option value="americas">Americas</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceana">Oceana</option>
             </select>


        </div>
    );
};



export default SearchAndFilter;