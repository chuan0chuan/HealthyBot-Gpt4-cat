import React, { useState } from 'react';
import BackgroundComponent from './BackgroundComponent';
import SuperfoodsImage from '../assets/superfoods.jpg';

function MythBusters() {
  // 使用标题作为关键字，并提供对应的内容
  const articles = [
    {
      title: "Not Everyone is a Nutrition Expert",
      content: (
        <div>
          <p>In the era of social media and the internet, everyone has an opinion about nutrition. But how many of these opinions are backed by genuine expertise? Let's dive into the facts and bust some myths.</p>
          <p>The Real Experts</p>
          <p>True nutrition experts are Registered Dietitians (RDs) or Licensed Dietitians (LDs). They have undergone rigorous training, earning specialized degrees in dietetics, nutrition, public health, or related fields. This extensive education prepares them to provide science-based nutritional advice and therapy.</p>
          <p>Qualifications Matter</p>
          <p>According to the American Dietetic Association, RDs and LDs complete a bachelor's degree at a minimum, with many holding advanced degrees. Their education includes supervised clinical experience, and they must pass a national examination. Continuous professional education is also a requirement to maintain their licensure.</p>
          <p>Misinformation Galore</p>
          <p>The Federal Trade Commission (FTC) warns against falling for health and fitness claims that sound too good to be true, highlighting the prevalence of misinformation online. With nutrition being a hot topic, it's crucial to vet the sources of dietary advice we choose to follow.</p>
          <p>Complementary and Alternative Medicine (CAM)</p>
          <p>The National Institutes of Health (NIH) provides resources on complementary and alternative medicine, distinguishing between practices supported by evidence and those that are not. It's a reminder that not all "natural" or "alternative" health advice comes from qualified nutrition experts.</p>
          <p>Health Scams</p>
          <p>The NIH's National Institute on Aging cautions against health scams, including nutritional ones, that prey on people's hopes for a quick fix. True dietary improvement relies on evidence-based practices, not miraculous claims.</p>
          <p>Conclusion</p>
          <p>While the internet is flooded with nutritional advice, not everyone doling out recommendations is a qualified expert. Registered Dietitians and Licensed Dietitians possess the education and credentials to provide reliable guidance. As consumers of information, it's our responsibility to discern between expert advice and well-intentioned yet unqualified opinions. Remember, when it comes to health, always consult a professional.</p>
        </div>
      ),
      references: (
        <div>
          <p>Duyff, ADA. (2006). <i>American Dietetic Association: Complete Food and Nutrition Guide</i>. Hoboken: John Wiley & Sons, Inc.</p>
          <p>Federal Trade Commission (FTC). (2013). <a href="http://www.consumer.ftc.gov/topics/health-fitness" target="_blank" rel="noopener noreferrer">Consumer Information: Health & Fitness</a>.</p>
          <p>National Institutes of Health (NIH). (2013). <a href="http://nccam.nih.gov/health/whatiscam" target="_blank" rel="noopener noreferrer">National Center for Complementary and Alternative Medicine</a>.</p>
          <p>National Institutes of Health (NIH). (2013). <a href="http://www.nia.nih.gov/health/publication/beware-health-scams" target="_blank" rel="noopener noreferrer">Beware of Health Scams</a>.</p>
        </div>
      )
    },
    {
      title: "Popular weight-loss diets: from evidence to practice",
      content: (
        <div>
          <p>The increasing number of overweight and obese individuals has become one of the leading public health concerns in many countries around the world. Concomitant with this increase in the prevalence of obesity has been the rise in the number of weight-loss diets, many of which alter macronutrient composition, but with the majority focused on carbohydrate restriction. Low-carbohydrate diets are attractive because they promise rapid weight loss without having to count calories and compromise the consumption of many palatable foods.</p>
          <p>By contrast, traditional dietary recommendations for weight loss endorse a fat-restricted and calorie-restricted diet high in complex carbohydrates. Evidence indicates that low-carbohydrate diets could be better in terms of short-term weight loss relative to traditional low-fat diets, but little is known about their long-term utility and safety.</p>
          <p>Diets based on the traditional Mediterranean dietary pattern are becoming increasingly popular because of their healthful benefits, particularly regarding cardiovascular outcomes. Mediterranean diets encourage consumption of a variety of palatable foods, optimizing adherence and sustainability.</p>
          <p>In this Review we discuss the current evidence on the efficacy of low-fat, low-carbohydrate and Mediterranean dietary patterns for weight loss, their potential mechanisms of action and important clinical considerations.</p>
          <p>Key Points</p>
          <ul>
            <li>Many popular weight-loss diets are available, though for the majority, little is known about their long-term efficacy, safety and ability to improve parameters associated with the risk of cardiovascular disease.</li>
            <li>Traditional recommendations of fat restriction have been shown to have a negligible effect on long-term weight loss and do not offer any benefit in terms of reducing the risk of cardiovascular disease.</li>
            <li>Low-carbohydrate diets promote greater short-term weight loss than low-fat diets by conferring transient negative-energy balance, but long-term studies are needed.</li>
            <li>Traditional Mediterranean dietary patterns have been shown to improve cardiovascular disease risk factors and to reduce the risk of chronic diseases, though their effects on long-term weight control have not been convincingly demonstrated.</li>
            <li>Health-care professionals should encourage weight-loss strategies that are sustainable and beneficial for overall health.</li>
          </ul>
        </div>
      ),
      references: (
        <div>
          <p>Malik, V. S., & Hu, F. B. (2007). <i>Popular weight-loss diets: from evidence to practice</i>. Nature Clinical Practice Cardiovascular Medicine, 4(1), 34-41.</p>
        </div>
      )
    },
    {
      title: "Demystifying the Superfood Craze",
      content: (
        <div>
          <p>The allure of "superfoods" often captures the attention of health enthusiasts, promising extraordinary health benefits ranging from weight loss to disease prevention. Despite the lack of a formal, scientific definition, the term "superfood" is typically bestowed upon foods rich in beneficial nutrients or those linked to disease prevention, earning it a spot in the Merriam-Webster Dictionary. The concept of superfoods isn't new; it dates back to the early 20th century, with the United Fruit Company's promotion of bananas as a panacea for various ailments, setting the stage for the banana diet phenomenon.</p>
          <img src={SuperfoodsImage} alt="Superfoods" style={{ display: 'block', margin: 'auto' }} />
          <p>In today's digital age, the hype surrounding new superfoods spreads rapidly, turning them into instant commercial successes. This trend is driven by selective scientific research, compelling marketing campaigns, and the appealing notion of "food as medicine." However, the reality is that while these foods are nutritious, focusing solely on them can overshadow the importance of dietary variety. For instance, the story of blueberries' rise to fame underscores the potential for misinformation, as early research on their antioxidant properties led to exaggerated health claims that were later questioned by the USDA.</p>
          <p>The industry's eagerness to label products as superfoods has seen a significant increase in product launches touting these claims, particularly in the United States. This marketing strategy not only boosts sales but also influences consumer perceptions, despite some health claims being on shaky scientific ground. For example, blueberries experienced a surge in popularity and production despite later clarifications about the limited role of antioxidants.</p>
          <p>Ultimately, the fixation on superfoods might distract from the broader nutritional principle of enjoying a varied diet. Emphasizing a "super plate" filled with a diverse range of healthy foods is a more balanced approach to nutrition. This strategy encourages exploring the vast array of nutritious foods available, rather than concentrating on a select few labeled as superfoods. By doing so, individuals can enjoy a richer, more diverse diet that supports overall health without falling prey to the latest dietary trends.</p>
        </div>
      ),
      references: (
        <div>
          <p>United Fruit Company. <i>Food value of the banana: Opinion of leading medical and scientific authorities</i>. United Fruit Company, Boston. 1917.</p>
          <p>Wilson, D.S., Gillespie, A.K. <i>Rooted in America: Foodlore of Popular Fruits and Vegetables</i>. University of Tennessee Press, 1st 1999.</p>
          <p>Nielson Global Health and Wellness Report. <i>We are what we eat. Healthy Eating Trends Around the World</i>. January 2015. Accessed 1/13/2018.</p>
          <p>Mintel Group. <i>Super growth for “super” foods: New Product development shoots up 202% globally over the past five years</i>. May 15, 2016. Accessed 1/13/2018.</p>
          <p>CB Insights. <i>From Pea Protein To Moringa, 13 Emerging Investor-Backed Ingredients</i>. October 31, 2017. Accessed 1/13/2018.</p>
          <p>Oxygen Radical Absorbance Capacity (ORAC) of Selected Foods, Release 2 (2010). Accessed 1/13/2018.</p>
          <p>USDA Economics, Statistics and Market Information System. <i>U.S. Blueberry Industry</i>. Accessed 1/16/18.</p>
        </div>
      )
    },
    {
      title: "The Lowdown on Negative-Calorie and Zero-Calorie Eats",
      content: (
        <div>
          <p>Ever stumbled upon the seductive idea that munching on certain foods could actually zap more calories than they pack? Welcome to the tantalizing world of so-called negative-calorie foods—a place where celery stalks are heroes, and every crunch is a step closer to calorie deficit nirvana. Alas, like unicorns, this concept is more fantasy than reality. Despite their nutrient-packed glory, the science tells us it's a stretch to believe digesting these foods burns more energy than they deliver. With the thermic effect of food lighting up only about 10% of our total calorie bonfire, the notion of any snack operating at over 100% efficiency crumbles faster than a cookie in milk.</p>
          <p>And what about their frosty cousins, the zero-calorie heroes like icy water, rumored to rev our metabolic engines? Sure, taking a gulp might spark a modest calorie-burning fiesta (we're talking a minuscule 3 to 24 calorie sizzle), but don't count on it melting away the pounds.</p>
          <p>Instead of chasing mythical calorie-burning beasts, why not treasure hunt for real nutritional gems? Picture a cornucopia of vibrant veggies, succulent fruits, hearty whole grains, and lean proteins. These are the true superstars of satiety and health, ready to be devoured in heaps without a calorie care in the world.</p>
          <p>So, before you knight another food as the next waist-whittling champion, remember: the real magic lies in a kaleidoscope of nutritious, delicious choices that delight the palate and nourish the body. Dive into a "super plate" rather than fixating on mythical superfoods, and watch your meals transform into a vibrant festival of flavors and health benefits. Who needs fairy tales when the truth tastes this good?</p>
          <p>Curious Culinary Questions Answered:</p>
          <ul>
            <li>Can nibbling on "negative calorie" foods whittle your waist? Nope, that's a diet myth dressed in kale and quinoa.</li>
            <li>What's on the menu for mythical negative calorie noshes? Think water-logged veggies and fruits—but don't bank on them for a calorie deficit.</li>
            <li>Chilly water as a slimming potion? A splash of cold reality says otherwise, with only a whisper of calorie burn.</li>
          </ul>
          <p>Remember, nutrition nirvana isn't found in fables. It's spread across a super plate brimming with variety, color, and life. Cheers to eating smart, living well, and laughing along the way!</p>
          <p>Suggested Readings and Flavorful Finds:</p>
          <ul>
            <li><i>Feast Your Eyes on Energy: A Culinary Guide to Metabolism</i> - Discover the delightful dynamics of digestion and energy expenditure.</li>
            <li><i>Veggie Victories: A Kaleidoscope of Nutritious Delights</i> - Embark on an epicurean adventure with fruits, veggies, and grains that are true champions of health.</li>
          </ul>
          <p>Bottom Line:</p>
          <p>Seek the joy in a diverse, nutrient-rich diet that's as fun as it is fulfilling. After all, the best eating plan is one that's colorful, varied, and enjoyed with a side of laughter and good cheer. Welcome to the party on your plate!</p>
        </div>
      ),
      references: (
        <div>
          <p>Energy requirements - Food and Agriculture Organization of the United Nations, 2018.</p>
          <p>Rolls, B. J., Bell, E. A., & Thorwart, M. L. (1999). <i>Water incorporated into a food but not served with a food decreases energy intake in lean women</i>. The American Journal of Clinical Nutrition, 70(4), 448-455.</p>
          <p>Romieu, I., Dossus, L., Barquera, S., Blottière, H. M., Franks, P. W., Gunter, M., ... & Willett, W. C. (2017). <i>Energy balance and obesity: what are the main drivers?</i> Cancer Causes & Control, 28(3), 247-258.</p>
          <p>Schoeller, D. A., & Buchholz, A. C. (2005). <i>Energetics of obesity and weight control: does diet composition matter?</i> Journal of the American Dietetic Association, 105(5), S24-S28.</p>
          <p>Schoeller, D. A. (1999). <i>Insights into energy balance from doubly labeled water</i>. International Journal of Obesity, 23(Suppl 2), S31-S35.</p>
          <p>Wansink, B., & Cheney, M. M. (2005). <i>Super Bowls: serving bowl size and food consumption</i>. JAMA, 293(14), 1727-1728.</p>
          <p>Westerterp, K. R. (2004). <i>Diet induced thermogenesis</i>. Nutrition & Metabolism, 1(1), 1-5.</p>
        </div>
      )
    }, 
    {
      title: "Trust in Weight Loss Ads? The Maze of Weight Loss Claims",
      content: (
        <div>
          <p>In the realm of weight loss advertisements, truth often becomes blurred with enticing yet empty promises. Dishonest advertisers exploit hopes with claims that sound too good to be true - because they are. Here's a rundown of common yet baseless promises you might encounter:</p>
          <ul>
            <li>Effortless weight loss without dieting or exercise? Myth.</li>
            <li>Shed pounds without minding your diet? False.</li>
            <li>Use this product for permanent weight loss? Incorrect.</li>
            <li>A pill as the sole solution for weight loss? Misleading.</li>
            <li>Lose 30 pounds in just 30 days? Unfounded.</li>
            <li>A one-size-fits-all solution? Non-existent.</li>
            <li>Lose weight with patches or creams? Impossible.</li>
          </ul>
          <p>The Hard Truth:</p>
          <p>Miraculous weight loss is a myth; there's no magical route to shedding pounds. Effective weight loss is achieved through a combination of a healthy diet and regular exercise. No product offers the luxury of consuming unlimited food while losing weight. Permanent changes in lifestyle are necessary for sustainable weight loss. While FDA-approved products like fat-absorption blockers or appetite suppressants exist, they're only effective when used alongside a healthy diet and exercise. Beware: products claiming rapid weight loss can not only be deceptive but harmful to your health. It's crucial to understand that weight loss solutions are not one-size-fits-all; what works for one individual may not work for another. Lastly, no external application, be it a patch or cream, can lead to weight loss.</p>
          <p>Remember:</p>
          <p>Before falling for any weight loss product's claims, consider the Federal Trade Commission's guidance at <a href="https://consumer.ftc.gov/articles/truth-behind-weight-loss-ads" target="_blank" rel="noopener noreferrer">ReportFraud.ftc.gov</a>. Educate yourself on the truth behind weight loss ads to make informed decisions that prioritize your health and well-being.</p>
        </div>
      ),
      references: (
        <div>
          <p>Federal Trade Commission. (n.d.). <i>The Truth Behind Weight Loss Ads</i>. <a href="https://consumer.ftc.gov/articles/truth-behind-weight-loss-ads" target="_blank" rel="noopener noreferrer">https://consumer.ftc.gov/articles/truth-behind-weight-loss-ads</a>.</p>
        </div>
      )
    } ,
    {
      title: "Sweet Potatoes: A Diabetic's Friend?",
      content: (
        <div>
          <p>Sweet potatoes, a staple in subtropical and tropical diets, have long been touted for their health benefits, particularly for those managing type 2 diabetes. Their nutritional profile is indeed impressive, with a half-cup serving of boiled sweet potatoes providing about 4 grams of fiber, which helps slow down the digestion of sugars, thereby controlling blood sugar spikes.</p>
          <p>Additionally, sweet potatoes are a valuable source of manganese, aiding in blood sugar stabilization and reducing insulin resistance. They are also packed with bioactive compounds like flavonoids and phenols, which may bolster insulin secretion.</p>
          <p>Contrary to popular belief, despite their sweetness, sweet potatoes have a low glycemic index, making them a favorable option for people with diabetes. This means they are less likely to cause quick increases in blood sugar levels. However, the preparation method matters; boiling or steaming is preferred to preserve their low glycemic qualities and nutritional value. On the other hand, frying or excessive baking can raise their glycemic index.</p>
          <p>Portion control remains key, as their natural sugars mean overindulgence could impact blood sugar levels. About a half-cup serving twice a week is advisable.</p>
          <p>While sweet potatoes hold promise for aiding blood sugar control, they are not a standalone solution for diabetes management, which requires a comprehensive approach, including diet, exercise, and regular blood sugar monitoring.</p>
          <p>Sweet potatoes can indeed be part of a diabetic diet due to their rich fiber content and low glycemic index. Preparation methods like boiling or steaming are recommended to maintain these benefits, emphasizing that while beneficial, sweet potatoes are but one component of a broader diabetes care strategy.</p>
        </div>
      ),
      references: "References: Pandey, K. B., & Rizvi, S. I. (2009). Oxidative Medicine and Cellular Longevity. Bovell-Benjamin, A. C. (2007). Advances in Food and Nutrition Research. Ooi, C. P., & Loke, S. C. (2013). The Cochrane Database of Systematic Reviews. Bahado-Singh, P. S., et al. (2011). Journal of Nutrition and Metabolism."
    },
    {
      title: "The Science of Eating Well",
      content: (
        <div>
          <p>In "Food for Life," Tim Spector, an acclaimed epidemiologist, delves into the intricate relationship between our diet and the health of our gut microbiome, expanding on themes from his previous works, "The Diet Myth" and "Spoon-Fed." This comprehensive guide, spanning over 500 pages, is a treasure trove of insights aiming to reshape our understanding of nutrition's impact not only on personal health but also on societal well-being and environmental sustainability.</p>
          <p>Spector advocates for a diverse diet, emphasizing the consumption of a wide array of plants – ideally 30 different types weekly – while cautioning against the pitfalls of ultra-processed foods and the misleading allure of "superfoods." The book unveils surprising facts, such as the higher fiber content in Americano coffee compared to bananas and dismantles common dietary myths, promoting a balanced approach to eating that favors natural, synergistic food combinations over chemically altered substitutes.</p>
          <p>Despite its wealth of information, Spector maintains a practical outlook, recognizing the varied nature of individual gut microbiomes and eschewing one-size-fits-all dietary prescriptions. Instead, he encourages informed, sensible food choices tailored to one’s unique physiological responses.</p>
          <p>"Food for Life" not only serves as an authoritative reference on nutrition but also embodies Spector's passion for food, underscored by his affinity for fermented foods and quality ingredients.</p>
        </div>
      ),
      references: (
        <div>
          <p>Guest, K. (2022, November 3). <a href="https://www.theguardian.com/books/2022/nov/03/food-for-life-by-tim-spector-review-the-science-of-eating-well" target="_blank" rel="noopener noreferrer">Food for Life by Tim Spector review – the science of eating well</a>. The Guardian.</p>
        </div>
      )
    },
    {
      title: "Organic vs. Conventional: Nutritional Superiority?",
      content: (
        <div>
          <p>The debate between the benefits of organic versus traditional food consumption has been a focal point for both consumers and researchers alike. With the global organic market flourishing, underscored by a growing consumer belief that organic foods are healthier, the question of whether these foods offer tangible health benefits is more pertinent than ever.</p>
          <p>The organic food industry has seen rapid growth, driven by consumer demand for products perceived to be healthier and more environmentally friendly. This trend is backed by significant spending globally, reflecting a shift in consumer priorities towards health and sustainability.</p>
          <p>Typically, organic food consumers are health-conscious individuals, often with higher levels of education and income. They prefer diets richer in plant-based foods and lower in processed options, influenced by the organic ethos of minimizing additive use.</p>
          <p>Longitudinal observational studies provide intriguing evidence of health benefits associated with organic food consumption. Increased organic intake has been associated with a reduced incidence of various health issues, including metabolic syndrome, infertility, and certain cancers.</p>
          <p>While the evidence suggests potential health benefits from consuming organic foods, particularly in terms of reduced pesticide exposure, the existing research is not definitive. The heterogeneity in defining "organic" and the varied percentages of organic food in diets studied complicate the analysis. Further research is needed to uncover the true impact of organic diets on human health.</p>
        </div>
      ),
      references: (
        <div>
          <p>Vigar, V., Myers, S., Oliver, C., Arellano, J., Robinson, S., & Leifert, C. (2019). <i>A systematic review of organic versus conventional food consumption: is there a measurable benefit on human health?</i> Nutrients, 12(1), 7.</p>
          <p>Hoefkens, C., Sioen, I., Baert, K., De Meulenaer, B., De Henauw, S., Vandekinderen, I., ... & Van Camp, J. (2010). <i>Consuming organic versus conventional vegetables: The effect on nutrient and contaminant intakes.</i> Food and Chemical Toxicology, 48(11), 3058-3066.</p>
        </div>
      )
    }
    

    
  ];

  const [selectedArticleIndex, setSelectedArticleIndex] = useState(0); // 默认选中第一篇文章

  const handleArticleClick = (index) => {
    setSelectedArticleIndex(index);
  };

  return (
    <div className="content-container">
      <BackgroundComponent transparent={true}/>
      <div className="keywords-container">
        <div className="keywords-box">
          <div style={{ overflowY: 'auto' }}>
            <h3>Rumor Title</h3>
            {articles.map((article, index) => (
  <li key={index} 
      style={{ cursor: 'pointer', listStyleType: 'none' }} 
      onClick={() => handleArticleClick(index)}
      className={selectedArticleIndex === index ? 'selectedArticleTitle' : ''}>
    {index + 1}. {article.title}
  </li>
))}


          </div>
        </div>
        <div className="keywords-box keywords-box-large">
          <div style={{ overflowY: 'auto' }}>
            <h3>Rumor Content</h3>
            <p>{articles[selectedArticleIndex].content}</p>
            <div className="references-container">
              <p>References</p>
              <p style={{ fontSize: '12px' }}>{articles[selectedArticleIndex].references}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );  
}

export default MythBusters;
