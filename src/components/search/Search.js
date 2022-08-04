import React, { useState } from 'react';
import FilterBox from './FilterBox';
import ProductCard from './ProductCard';
import './Search.css';

const filterData = [
    {
        title: "Related Category",
        content: [
            "Paracetamol Tablets",
            "Paracetamol Syrup",
            "Paracetamol Powder",
            "Aceclofenac",
            "Magaladrate Simethicone Oral Suspension",
            "Mefenamic Paracetamol Syrup",
        ]
    },
    {
        title: "Related Brands",
        content: [
            "Cipmol Paracetamol",
            "Pandal Paracetamol Tablets",
            "Combiflam",
            "Crocin Tablets",
            "Calpol Paracetamol Tablets",
            "Sumo Tablet",
        ]
    },
    {
        title: "Business Type",
        content: [
            "Wholesaler",
            "Manufacturer",
            "Retailer",
            "Exporter",
        ]
    },
    {
        title: "Strength",
        content: [
            "500 mg",
            "650 mg",
        ]
    },
    {
        title: "Manufacturer",
        content: [
            "Intas Pharmaceutical Ltd",
            "Alkem Laboratories Ltd",
        ]
    },
    {
        title: "Prescription/Non prescription",
        content: [
            "Intas Pharmaceutical Ltd",
            "Alkem Laboratories Ltd",
        ]
    },
]

function Search() {
    const [selectedFilters, setSelectedFilters] = useState(["Aceclofenac","500 mg"]);

    const handleRemoveAll = () => {
        setSelectedFilters([]);
    }

    const handleRemoveFilter = (filterItem) => {
        let oldSelectedFilter = [...selectedFilters];
        let newSelectedFilter = oldSelectedFilter.filter((item) => {
            if(item !== filterItem) return item;
        });
        setSelectedFilters(newSelectedFilter);
    }

    return (
        <div className="search">
            <div className="search_top">
                <p className="search_top_tabs">
                    <span className="st_tab_text" >Medical Darpan</span>
                    <span className="st_tab_text" > &gt; Search &gt;</span>
                    <span className="st_tab_text st_active_tab"> FabiFlu Tablet</span>
                </p>
                <div className="search_input_box">
                    <div className="search_input_icon" >
                        <i class="fa-solid fa-magnifying-glass fa-lg"></i>
                    </div>
                    <input className="search_input" placeholder='Search...' />
                    <button type="button" className="search_btn">Search</button>
                </div>
            </div>
            <div className="search_main">
                <div className="search_main_top">
                    <h2 className="smt_title">Paracetamol</h2>
                    <p className="smt_quantity">{"(128 products)"}</p>
                    <div className="smt_filter_box">
                        {
                            selectedFilters.map((filterTag, index) => {
                                return (
                                    <div className="smt_fitler_item">
                                        <p className="smt_filter_item_text">{filterTag}</p>
                                        <p className="smt_filter_item_remove_icon" onClick={() => handleRemoveFilter(filterTag)} ><i class="fa-solid fa-xmark"></i></p>
                                    </div>
                                )
                            })
                        }
                        {/*                         
                        <div className="smt_fitler_item">
                            <p className="smt_filter_item_text">500 mg</p>
                            <p className="smt_filter_item_remove_icon"><i class="fa-solid fa-xmark"></i></p>
                        </div> */}
                        { selectedFilters.length > 0 && <p className="smt_filter_remove_all" onClick={handleRemoveAll} >Remove all</p> }
                    </div>
                </div>
                <div className="search_main_content">
                    <div className="sm_content_left">
                        {
                            filterData.map((item, index) => {
                                return <FilterBox
                                    title={item.title}
                                    content={item.content}
                                    key={index}
                                    selectedFilters={selectedFilters}
                                    setSelectedFilters={setSelectedFilters} />
                            })
                        }
                    </div>
                    <div className="sm_content_right">
                        <div className="sm_cr_content">
                            {
                                [1, 2, 3, 4, 5, 6].map((card, index) => {
                                    return (
                                        <ProductCard key={index} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search