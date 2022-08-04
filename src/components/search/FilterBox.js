import React from 'react'

function FilterBox({ title, content, selectedFilters, setSelectedFilters }) {

    const handleRemoveFilter = (filterItem) => {
        let oldSelectedFilter = [...selectedFilters];
        let newSelectedFilter = oldSelectedFilter.filter((item) => {
            if(item !== filterItem) return item
        });
        setSelectedFilters(newSelectedFilter);
    }

    const handleAddFilter = (filterItem) => {
        if (!selectedFilters.includes(filterItem)) {
            let oldSelectedFilter = [...selectedFilters];
            oldSelectedFilter.push(filterItem);
            setSelectedFilters(oldSelectedFilter);
        }
    }

    return (
        <div className="filter_box">
            <h2 className="filter_box_title">{title}</h2>
            <ul className="fb_list" >
                {
                    content.map((item, index) => {
                        return (
                            <li className={selectedFilters.includes(item) ? "fb_list_item active_filter_item" : "fb_list_item"}>
                                <p onClick={() => handleAddFilter(item)} >{item}</p>
                                <p className={selectedFilters.includes(item) ? "active_filter" : "not_active_filter"} onClick={() => handleRemoveFilter(item)} ><i class="fa-solid fa-xmark"></i></p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default FilterBox