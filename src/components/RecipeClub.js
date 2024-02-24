import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function RecipeClub() {
  // 假设这是你的食谱数据
  const recipes = [
    { id: 1, title: 'Recipe 1', description: 'Description of Recipe 1' },
    { id: 2, title: 'Recipe 2', description: 'Description of Recipe 2' },
    { id: 3, title: 'Recipe 3', description: 'Description of Recipe 3' },
    { id: 4, title: 'Recipe 4', description: 'Description of Recipe 4' },
    { id: 5, title: 'Recipe 5', description: 'Description of Recipe 5' },
    { id: 6, title: 'Recipe 6', description: 'Description of Recipe 6' },
    // 添加更多的食谱
  ];

  // 计算每行显示的 Card 数量
  const calculateCols = () => {
    const screenWidth = window.innerWidth;
    let cols = Math.floor(screenWidth / 300); // 假设每个 Card 宽度为 300px
    return cols > 0 ? cols : 1; // 最少显示一个 Card
  };

  return (
    <Container className="recipe-container"> 
      <Row xs={1} sm={2} md={3} lg={calculateCols()}> {/* 根据屏幕宽度自适应显示的列数 */}
        {recipes.map((recipe) => (
          <Col key={recipe.id} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{recipe.title}</Card.Title>
                <Card.Text>{recipe.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default RecipeClub;
