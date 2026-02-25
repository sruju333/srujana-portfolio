export async function GET() {
    return Response.json([
        {   title: "Predicting Closed Questions on Stack Overflow using AI",
            description: "Developed a Python AI system using BERT, Neural Networks and Natural Language Processing to predict closed Stack\n" +
                "Overflow questions, enhancing platform efficiency; Deployed a Flask Web App to showcase interactive predictions",
            github: "https://github.com/sruju333/Artificial-Intelligence-Project"
        },
        {   title: "Game Theory and Mechanism Design (Python) - IISc Project",
            description: "Applied Python data structures (lists and dictionaries) to implement an n-player strategic game, learning and practicing\n" +
                "game theory concepts by computing Nash equilibria and dominant strategies for 32K+ lines of matrix data",
            github: "https://github.com/sruju333/BraessParadox20Players"
        },
    ]);
}