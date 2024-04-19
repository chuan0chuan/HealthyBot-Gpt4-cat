import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
import guacamoleImage from '../assets/guacamoleImage.png'; // 确保图片路径正确
import broccoliPotatoSoup from '../assets/broccoliPotatoSoup.png'; // 确保图片路径正确
import appleSpinachSalad from '../assets/appleSpinachSalad.png'; // 确保图片路径正确
import pineappleFrozenFruitPops from '../assets/pineappleFrozenFruitPops.png'; // 确保图片路径正确
import springRoll from '../assets/springRolls.png'; // 确保图片路径正确
import cranberryAppleFarroStuffing from '../assets/cranberryAppleFarroStuffing.png'; // 确保图片路径正确

function RecipeModal() { 
  const recipes = [{ 
    id: 1,
    title: 'Homemade Guacamole',
    category: '30 Minutes or Less, Kid-Friendly',
    foodGroup: 'Fruits, Vegetables',
    description: 'Are you an avocado fan? Bring homemade guacamole to your table with this recipe.',
    yield: '6 servings',
    ingredients: [
      '3 avocados (ripe)',
      '1 teaspoon lemon juice',
      '1 tablespoon lime juice',
      '2 roma tomatoes (diced)',
      '1 1/5 cups red onion (chopped)',
      '1/2 jalapeno pepper (chopped [note: include seeds if you want extra spice/heat])',
      '1/4 cup cilantro (fresh, chopped [or 2 tsp dried cilantro])',
      '1/2 teaspoon salt',
      '1/4 teaspoon black pepper',
    ],
    steps: [
      'Wash hands with soap and water.',
      'Gently rub produce under cool running water.',
      'Cut avocados in half, remove pit, and scoop pulp into a medium bowl.',
      'Mash avocado pulp with a fork and mix in remaining ingredients.',
      'Stir to combine. Serve with raw vegetable sticks or baked tortilla chips.',
    ],
    notes: [
      'If desire less spice/heat, remove jalapeno from recipe.',
      'You can also use a food processor to mash avocado and mix ingredients together.',
    ],
    mealType: 'Snack',
    season: 'Winter, Spring, Summer, Fall',
    sourceName: 'University of Illinois Extension', // 新增食谱来源名称
    sourceUrl: 'https://eat-move-save.extension.illinois.edu/eat/recipes/homemade-guacamole', // 食谱来源URL
    imgurl: `/img/guacamoleImage.png`,
    image: guacamoleImage, // 假设你有相应的图片
  },
  {
    id: 2,
    title: "Apple Spinach Salad",
    category: "30 Minutes or Less",
    foodGroup: "Fruits, Vegetables, Dairy",
    description: "Add more fruits and vegetables to your day with this simple, flavorful salad.",
    yield: "6, 1/2 cup servings",
    ingredients: [
      "4 cups spinach leaves",
      "2 tablespoons canola oil",
      "2 1/2 tablespoons cider vinegar",
      "1 tablespoon sugar",
      "1/4 teaspoon salt",
      "1/4 cup red onion (chopped)",
      "1 medium apple (tart, cut into bite-sized chunks)",
      "1/4 cup raisins (or dried cranberries)"
    ],
    steps: [
      "Wash spinach thoroughly. Pat dry or spin in a salad spinner.",
      "Tear spinach into bite-sized pieces and place in a large bowl. Set aside.",
      "In a small bowl mix oil, vinegar, sugar, and salt.",
      "Add the apple, onion, and dried fruit to the oil mixture and toss to coat apples. Let stand ten minutes.",
      "Combine ingredients together in the large bowl of spinach and serve.",
      "Refrigerate leftovers."
    ],
    notes: [
      "The spinach and oil/vinegar mixture can be prepared ahead and stored separately in the refrigerator.",
      "To keep the apple from getting brown, cut the apple and add to the oil/vinegar mixture then assemble the salad just before serving. The vinegar in the dressing keeps the apple from browning.",
      "For a complete meal, add slices of baked or grilled chicken breast and serve with a slice of whole wheat bread and a glass of skim milk.",
      "Add feta or walnuts for additional flavor!"
    ],
    mealType: "Lunch, Dinner",
    season: "Summer, Fall",
    sourceName: "University of Minnesota Extension",
    sourceUrl: 'https://reallifegoodfood.umn.edu/salads/apple-spinach-salad',
    imgurl: `/img/appleSpinachSalad.png`, // 假设的链接
    image: appleSpinachSalad // 假设的图片
  },  
  {
    id: 3,
    title: "'Leftovers' Broccoli Potato Soup",
    category: '30 Minutes or Less, Kid-Friendly',
    foodGroup: 'Vegetables, Dairy',
    description: 'A tasty and made-from-scratch soup that comes together quickly with the help of leftover mashed potatoes.',
    yield: '4 servings',
    ingredients: [
      '4 cups broccoli (chopped)',
      '1 small onion (chopped)',
      '4 cups broth (chicken or vegetable broth, low-sodium)',
      '1 cup evaporated milk (non-fat)',
      '1 cup potatoes (mashed, leftover or 1/2 cup mashed potatoes, instant & prepare with water to make 1 cup potatoes)',
      '1/4 cup cheddar cheese (shredded)',
      'Salt (to taste)',
      'Black pepper (to taste)',
    ],
    steps: [
      'Combine broccoli, onion, and broth in a large saucepan.',
      'Bring to a boil.',
      'Reduce heat. Cover and simmer about 10 minutes or until vegetables are tender.',
      'Add milk to soup. Slowly stir in mashed potatoes.',
      'Cook, stirring constantly, until bubbly and thickened.',
      'Season with salt and pepper; stir in a little more milk or water if soup starts to become too thick.',
      'Ladle into serving bowls.',
      'Sprinkle about 1 tablespoon cheese over each serving.',
    ],
    mealType: 'Lunch, Dinner',
    season: 'Winter, Fall',
    cuisine: 'Vegetarian',
    sourceName: 'USDA, MyPlate',
    sourceUrl: 'https://www.myplate.gov/recipes/supplemental-nutrition-assistance-program-snap/broccoli-potato-soup', // Note: This is a placeholder URL. Please replace it with the actual URL if available.
    imgurl: `/img/broccoliPotatoSoup.png`,// 假设你有相应的图片
    image: broccoliPotatoSoup, // 假设你有相应的图片
  },
  {
    id: 4,
    title: 'Pineapple Frozen Fruit Pops',
    category: 'Kid-Friendly',
    foodGroup: 'Fruits, Dairy',
    description: 'These frozen fruit pops contain fruit, juice, and low-fat yogurt to create a refreshing treat on a summer day.',
    yield: '4 servings',
    ingredients: [
      '1 cup pineapple (crushed)',
      '1 cup yogurt (low-fat, fruit flavored)',
      '6 ounces orange juice (frozen, concentrate (thawed))',
    ],
    steps: [
      'Mix the ingredients in a medium-size bowl. Divide into 4 paper cups.',
      'Freeze until slushy - about 60 minutes. Insert a wooden stick half way through the center of each fruit pop.',
      'Freeze until hard or at least 4 hours. Peel away the paper cup before you eat the fruit pop.',
    ],
    //notes: 'You can mix ingredients and freeze in ice cube tray instead of cups, making great "ice cubes" in fruit juice. Try other fruits or juice concentrates for variety.',
    notes: [ 'You can mix ingredients and freeze in ice cube tray instead of cups,', 'making great "ice cubes" in fruit juice. Try other fruits or juice concentrates for variety.'], 
    mealType: 'Snack',
    season: 'Spring, Summer',
    sourceName: 'MyPlate Recipes',
    sourceUrl: 'https://www.myplate.gov/recipes/supplemental-nutrition-assistance-program-snap/frozen-fruit-pops', // Note: This is a placeholder URL. Replace it with the actual URL if available.
    imgurl: `/img/pineappleFrozenFruitPops.png`,// Assume you have an appropriate image
    image: pineappleFrozenFruitPops, // Assume you have an appropriate image
  },
  {
    id: 5,
    title: 'Vietnamese Fresh Spring Rolls',
    category: '30 Minutes or Less',
    foodGroup: 'Vegetables',
    description: 'Quick and refreshing appetizer made with fresh vegetables and herbs',
    yield: '8 rolls',
    prepTime: '15 minutes',
    ingredients: [
      '1 cup carrots (cut into long, thin strips)',
      '2 cups bean sprouts',
      '2 cups cucumber (seeded and cut into long, thin strips)',
      '1 cup scallions (minced)',
      '1/2 cup cilantro (fresh, chopped)',
      '1/4 cup mint (fresh, chopped)',
      '8 rice paper wrappers'
    ],
    steps: [
      'Toss first six ingredients in a large bowl.',
      'Soak one rice paper wrapper in warm water until soft (1 to 2 minutes). Shake off excess water.',
      'Place vegetable filling off-center on rice paper, and fold like an egg roll (tuck in the sides to keep the filling inside).',
      'Repeat with remaining vegetable filling and rice paper wrappers.',
      'Once you have assembled all of the spring rolls, serve immediately.'
    ],
    notes: [],
    mealType: 'Snack',
    season: 'Spring',
    cuisine: 'Vietnamese',
    sourceName: 'National Heart, Lung, and Blood Institute',
    sourceUrl: 'https://healthyeating.nhlbi.nih.gov/recipedetail.aspx?linkId=0&cId=7&rId=247', // Placeholder URL
    imgurl: '/img/springRoll.png', // Placeholder image URL
    image: springRoll, // Placeholder image
  } ,
  {
    id: 6,
    title: 'Cranberry Apple Farro Stuffing',
    category: 'Dinner',
    foodGroup: 'Fruits, Vegetables, Grains',
    description: 'A change up to this year’s traditional Thanksgiving stuffing.',
    yield: '6 servings',
    prepTime: '20 minutes',
    ingredients: [
      '1 cup farro (dried)',
      '2 tablespoons olive oil',
      '1/2 cup red onion (chopped)',
      '1/4 cup celery (chopped)',
      '3/4 cup Granny Smith apples (diced)',
      '1/4 teaspoon garlic powder',
      '1 tablespoon lemon juice',
      '1/4 cup scallions (chopped [green onion])',
      '1 cup fresh parsley',
      '2 2/3 cups vegetable stock',
      '1/2 teaspoon seasoned salt',
      '1/4 teaspoon ground black pepper',
      '1 cup dried cranberries'
    ],
    steps: [
      'In a small pot over high heat, bring the stock to a boil. Once boiling, add the farro and stir. Reduce heat to low, cover, and cook for 15-20 minutes or until all liquid is absorbed.',
      'Place a sauté pan over medium heat and add olive oil.',
      'Once the onions become translucent, add the apples and scallions. Sauté for 1-2 minutes until apples soften slightly.',
      'Combine the cooked farro and sautéed mixtures in a mixing bowl. Add garlic powder, lemon juice, parsley, seasoned salt, black pepper, and cranberries.',
      'Serve as a Thanksgiving alternative or with any fall-inspired dish. Enjoy!'
    ],
    notes: ['Equipment Needed: Small pot, Sauté Pan, Measuring Cups and Spoons, Spoon or Rubber Spatula'],
    mealType: 'Dinner',
    season: 'Winter, Fall',
    sourceName: 'USDA, Agricultural Research Service',
    sourceUrl: 'https://www.ars.usda.gov/ARSUserFiles/80400500/pdf/7%20Cranberry%20Apple%20Farro%20Stuffing.pdf', // Placeholder URL
    imgurl: '/img/cranberryAppleFarroStuffing.png', // Placeholder image URL
    image: cranberryAppleFarroStuffing, // Placeholder image
  }  
  ];

  const [showModal, setShowModal] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState({});

  const handleShowModal = (recipe) => {
    setCurrentRecipe(recipe);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <Container className="recipe-container">
      <Row >
      {recipes.map((recipe, index) => (
        <Col key={index} md={4}>
          <Card onClick={() => handleShowModal(recipe)} style={{ cursor: 'pointer'  }} className="card">
          <Card.Img variant="top" src={recipe.image} alt={recipe.title} />
            <Card.Body >
            <Card.Title style={{ fontWeight: 'bold', fontSize: '1.5em' } }>{recipe.title}</Card.Title>
            <Card.Text style={{ fontSize: '1.4em' }}><b>Category:</b> {recipe.category} <br />  <b>Food group:</b> {recipe.foodGroup}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
))}
      </Row>

      <Modal show={showModal} onHide={handleCloseModal} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>{currentRecipe.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {currentRecipe.image ? <img src={currentRecipe.image} alt="Recipe" style={{ width: '100%' }} /> : null}
          <h5>Ingredients</h5>
          <ul>
            {currentRecipe.ingredients?.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h5>Steps</h5>
          <ol>
            {currentRecipe.steps?.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
          {currentRecipe.notes && currentRecipe.notes.length > 0 && (
    <>
      <p><strong>Notes:</strong> {currentRecipe.notes.join(" ")}</p>
    </>
  )}
          <p><strong>Meal Type:</strong> {currentRecipe.mealType}</p>
          <p><strong>Season:</strong> {currentRecipe.season}</p>
          <p><strong>Source:</strong>  <a href={currentRecipe.sourceUrl} target="_blank" rel="noopener noreferrer">
          {currentRecipe.sourceName}
            </a></p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default RecipeModal;
