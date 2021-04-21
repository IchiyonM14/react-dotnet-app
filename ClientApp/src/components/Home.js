import React, { useState} from 'react';
import CreatableSelect from 'react-select/creatable';
import Recipe from "./recipe";
import AddRecipe from "./add-recipe";
import Modal from "./modal";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [ingredients, setIngredients] = useState([{}]);
    const [recipeName, setRecipeName] = useState('');
    const [recipeNotes, setRecipeNotes] = useState('');
    const formClasses = 'form-control mb-3';

    const toggleModal = () => {
        setIsOpen(prevIsOpen => {
            return !prevIsOpen;
        });
    };

    const handleMultiselectChange = (newValue) => {
        setIngredients(newValue);
    }

    const onChangeInput = onChange => ({ target: { value } }) => {
        onChange(value);
    };

    return (
        <div>
            <h1>Hello, world!</h1>

            <Recipe
                name="Guacamole"
                notes="Notes for the recipe"
                isCompleted
            />
            <AddRecipe onClick={toggleModal} />
            <Modal
                title="Recipe:"
                isOpen={isOpen}
                onClose={toggleModal}
            >
                <label
                    className="mb-0"
                    htmlFor="recipe-name"
                >
                    Name:
                </label>
                <input
                    id="recipe-name"
                    className={formClasses}
                    onChange={onChangeInput(setRecipeName)}
                    value={recipeName}
                />
                <label
                    className="mb-0"
                    htmlFor="recipe-notes"
                >
                    Notes:
                </label>
                <textarea
                    id="recipe-notes"
                    className={formClasses}
                    onChange={onChangeInput(setRecipeNotes)}
                    value={recipeNotes}
                />
                <label
                    className="mb-0"
                    htmlFor="recipe-ingredients"
                >
                    Ingredients:
                </label>
                <CreatableSelect
                    id="recipe-ingredients"
                    isMulti
                    onChange={handleMultiselectChange}
                    options={ingredients}
                />
            </Modal>

            <p>Welcome to your new single-page application, built with:</p>
            <ul>
                <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
                <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>
                <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
            </ul>
            <p>To help you get started, we have also set up:</p>
            <ul>
                <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>
                <li><strong>Development server integration</strong>. In development mode, the development server from <code>create-react-app</code> runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>
                <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration produces minified, efficiently bundled JavaScript files.</li>
            </ul>
            <p>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>
        </div>
    );
};

export default Home;
