import './CategoryFilterTablet.css';
import '../utils.css';

function CategoryFilterTablet() {
    let categoryFilters = [
        { name: "Dates", id: 1, filter: true },
        { name: "Group Size", id: 2, filter: true },
        { name: "More filters", id: 3, filter: true },
        { name: "Great for groups", id: 4 },
        { name: "Family-friendly", id: 5 },
        { name: "Animals", id: 6 },
        { name: "Arts & writing", id: 7 },
        { name: "Baking", id: 8 },
        { name: "Cooking", id: 9 },
        { name: "Dance", id: 10 },
        { name: "Drinks", id: 11 },
        { name: "Entertainment", id: 12 },
        { name: "Fitness", id: 13 },
        { name: "History & culture", id: 14 },
        { name: "Magic", id: 15 },
        { name: "Music", id: 16 },
        { name: "Social impact", id: 17 },
        { name: "Wellness", id: 18 },
        { name: "Olympians & Paralympians", id: 19 },
        { name: "Designed for accessibility", id: 20 }
    ]
    return (
        <div className="category-filter-tablet horizontal-slider">
            {categoryFilters.map((ele) => {
                return (
                    <div className={`${ele.filter ? 'filters-tablet' : ''} categories-tablet`} key={ele.id}>
                        <a href='/'>{ele.name}</a>
                    </div>
                )
            })}
        </div>
    );
}

export default CategoryFilterTablet;
