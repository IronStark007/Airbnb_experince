import './CategoryFilter.css';
import '../utils.css';

function CategoryFilter() {
    let filter = [{ name: "Dates", id: 1 }, { name: "Group Size", id: 2 }, { name: "More filters", id: 3 }]
    let category = [
        { name: "Great for groups", id: 1 },
        { name: "Family-friendly", id: 2 },
        { name: "Animals", id: 3 },
        { name: "Arts & writing", id: 4 },
        { name: "Baking", id: 5 },
        { name: "Cooking", id: 6 },
        { name: "Dance", id: 7 },
        { name: "Drinks", id: 8 },
        { name: "Entertainment", id: 9 },
        { name: "Fitness", id: 10 },
        { name: "History & culture", id: 11 },
        { name: "Magic", id: 12 },
        { name: "Music", id: 13 },
        { name: "Social impact", id: 14 },
        { name: "Wellness", id: 15 },
        { name: "Olympians & Paralympians", id: 16 },
        { name: "Designed for accessibility", id: 17 }
    ]
    return (
        <div className="category-filter">
            {filter.map((ele) => {
                return (
                    <div className='filters' key={ele.id}>
                        <a href='/'>{ele.name}</a>
                    </div>
                )
            })}
            <div className='line-break'></div>
            <div className='horizontal-slider'>
                {category.map((ele) => {
                    return (
                        <div className='category' key={ele.id}>
                            <a href='/'>{ele.name}</a>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default CategoryFilter;
