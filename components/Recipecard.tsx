import React from 'react'

const Recipecard = () => {
    return (
        <div className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden">
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">Puttu Recipe | Kerala Puttu</h2>
                <h3 className="text-lg font-medium mb-4">Ingredients:</h3>
                <ul className="list-disc ml-6 mb-4">
                    <li>0.5 cup puttu flour</li>
                    <li>0.17 cup water or add as required</li>
                    <li>0.17 teaspoon salt or add as required</li>
                    <li>0.25 cup coconut fresh, grated</li>
                    <li>1 to 1.5 cups water for steaming</li>
                </ul>
                <h3 className="text-lg font-medium mb-2">Instructions:</h3>
                <ol>
                    <li>In a mixing bowl, combine the rice flour and grated coconut.</li>
                    <li>Add salt to taste.</li>
                    <li>Sprinkle water gradually while mixing until the mixture resembles coarse crumbs. The mixture should hold shape when pressed together but crumble easily.</li>
                    <li>Keep the flour mixture covered for about 10-15 minutes to allow it to slightly ferment.</li>
                    <li>Your puttu flour mixture is now ready to be used for making puttu!</li>
                </ol>
                <h3 className="text-lg font-medium mb-2">Instructions:</h3>
                <p className="leading-relaxed">Instructions</p>
            </div>
        </div>
    )
}

export default Recipecard
