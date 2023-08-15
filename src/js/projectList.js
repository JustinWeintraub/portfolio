export const topics = [
  "Python",
  "Javascript",
  "Processing/Java",
  "Typescript",
  "Flutter/Dart",
  "AWS",
  "Fullstack",
  "Web Design",
  "Machine Learning",
  "Database Management",
  "Mobile Development",
  "Object Oriented",
  "Visualization",
  "Games/Simulations",
  "Data Cleanup",
  "API Calling",
  "Physics",
  "NodeJS",
  "React",
  "React Native",
  "Flask",
  "Vue",
  "Firebase",
  "MongoDB",
  "SQL",
  "Django",
];
const github = "Github link with more details";
const heroku = "Link to project in action";
const video = "Video demo";
const projects = [
  {
    title: "Clean Connect",
    img: require("../assets/CleanConnect.png"),
    topics: [
      "Javascript",
      "Typescript",
      "Web Design",
      "Database Management",
      "Object Oriented",
      "API Calling",
      "React",
      "Fullstack",
      "NodeJS",
      "MongoDB",
    ],
    text: [
      "Cooperative business idea to solve problem of issues not being fixed in a timely manner at locations such as restrooms. Uses tag based system utilizing qr codes to report issues. Backend coded in Node.js with Typescript and MongoDB. Individually coded frontend in React.",
      github + "https://github.com/JakeTrock/CleanConnect",
      video + "https://cleanconnect.us/images/JakeCleanConn.mp4",
    ],
    code: [
      {
        title: "Grid Code",
        language: "javascript",
        codeSnippet: `//create grids then unit containers
import React, { Component } from "react";
import _ from "lodash";

class Grid extends Component {
  componentDidMount() {
    if (this.props.emptyBehavior) // binds this so empty behavior has parent functionality
      this.emptyBehavior = this.props.emptyBehavior.bind(this);
  }
  render() {
    let { items, idLocation, customBehavior, emptyBehavior } = this.props;
    items = _.chunk(items, 2); // splits items up into groups of 2
    return (
      <React.Fragment>
        {items.map(function (list, i) {
          return (
            <div className="row" key={i}>
              {list.map(function (item) {
                if (item.name) // if item has a name then it has properties to be displayed
                  return (
                    <React.Fragment key={item[idLocation]}>
                      {customBehavior(item)}
                    </React.Fragment>
                  );
                else if (emptyBehavior) { // if an item has behavior when empty display said behavior
                  return (
                    <React.Fragment key="empty">
                      {emptyBehavior()}
                    </React.Fragment>
                  );
                } else return ""; // else don't display anything
              })}
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

export default Grid;`,
        codeDescription: `This is the code for the grid which is used for multiple things, for example showcasing all the tags a person has.
        A grid displays multiple children which are given to it by it's parent. 
        There is the potential for multiple behaviors, with an example for behavior being a tag either displaying it's information or a plus sign to create a new tag.
        Object oriented design concepts were used for reusability and readability.
        `,
      },
      {
        title: "Pagination Code",
        language: "javascript",
        codeSnippet: `export const ButtonPagination = ({
  itemsCount,
  pageSize,
  currentPage,
  onPageChange,
}) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav>
      <ul className="pagination justify-content-center">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <div
              className="page-link"
              style={{ marginLeft: "auto" }}
              onClick={() => onPageChange(page)}
            >
              {page}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};`,
        codeDescription: `Pagination was necessary for multiple parts of the program, with the highlighted code showing a way to swap between pages using a button. 
Lodash was used to filter the objects so only specific ones based on the page showed up and bootstrap was used for styling the button.`,
      },
      {
        title: "API Call Code",
        language: "javascript",
        codeSnippet: `export function deleteInfo() {
  //initial step of deleting account
  return endpointTemplate({
    type: "delete",
    path: apiEndpoint + "/deleteinfo",
    headers,
    tryCatch: true,
  });
}`,
        codeDescription: `Code for one of the many middleware calls, specifically for deleting an user account. 
Most of the work is abstracted for visibility. Each call needs a type, a path for the call, headers for authentication and body type, as well as an optional tryCatch surrounder depending on whether or not you want to display errors.
Axios was used for the middleware.`,
      },
      {
        title: "API Route Code",
        language: "typescript",
        codeSnippet: `// ROUTE: POST user/register
// DESCRIPTION: sends registration email to user
// INPUT: user name, email and password(all as strings), via json body
router.post("/register", (req: Request, res: Response) => {
  User.new(req.body, econf.gateway)
    .then((user: ifUserDocument) =>
      UserIndex.createIndex({
        _id: user._id,
        email: user.email,
        prefix: "confirm",
        ic: true,
      })
    )
    .then((out) => res.json(helpers.scadd(out)))
    .catch((e) => res.json(helpers.erep(e)));
});`,
        codeDescription: `Here's an example for a route in the backend. It first tries to create a user given passed JSON in a database selected by econf.gateway (in this project MongoDB). 
        If a user is created, an auto-formatted success message is sent with the new user's data. If creation was unsuccessful, an error is sent based off of the error obtained (ex: email already in use).`,
      },
    ],
  },
  {
    title: "Weather Predictor",
    img: require("../assets/Weather.png"),
    topics: [
      "Python",
      "Javascript",
      "Web Design",
      "Machine Learning",
      "Data Cleanup",
      "API Calling",
      "Flask",
      "React",
    ],
    text: [
      "A cumulative machine learning and web design project based around weather. A linear regression algorithm with data mapping and scaling is used to predict temperature. A neural network is used to predict weather condition, having the ability to be trained with user given info. Machine learning algorithms were made with knowledge gained from Andrew Ng's Coursera series. ",
      github + "https://github.com/JustinWeintraub/weather",
      heroku + "https://weintraub-weather.herokuapp.com/",
    ],
    code: [
      {
        title: "Regularized Cost Function Code",
        language: "python",
        codeSnippet: `def nnCost(nn_params,*args):
  input_layer_size, hidden_layer_size, num_labels, X, y, lam, m = args
  Theta1 = nn_params[0:(hidden_layer_size*(input_layer_size+1))].reshape(hidden_layer_size,(input_layer_size+1))
  Theta2 = nn_params[(hidden_layer_size*(input_layer_size+1)):].reshape(num_labels,(hidden_layer_size+1))     
  J = 0
  Theta1_grad = np.zeros(shape=(np.size(Theta1)))
  Theta2_grad = np.zeros(shape=(np.size(Theta2)))
  a1=np.hstack((np.ones(shape=(m, 1)), X))
  z2=a1*Theta1.transpose()
  a2=sigmoid(z2)
  z3=np.hstack((np.ones(shape=(m, 1)), a2))*Theta2.transpose()
  a3=sigmoid(z3)
  I = np.eye(num_labels)
  Y = np.zeros(shape=(m, num_labels))
  for i in range(m):
    Y[i, :]= I[y[i], :]
  J=1/np.float32(m)*np.sum(np.sum(np.multiply(-Y,np.log(a3))-np.multiply(1-Y,np.log(1-a3))))
  theta1_0=Theta1[:, 1:] 
  theta2_0=Theta2[:, 1:np.size(Theta2,1)]

  regularizedJ=lam/(2*m)*np.sum(np.sum(np.square(theta1_0)))
  regularizedJ=regularizedJ+lam/(2*m)*np.sum(np.sum(np.square(theta2_0)))
  J=J+regularizedJ
  return (J)

theta = optimize.fmin_cg(nnCost, initial_nn_params,fprime=nnGradient, args=args, maxiter=iterations)`,
        codeDescription: `This is my neural network's regularized cost function to be minimized and how it's called. 
It uses given parameters, specially the inputs (X), expected answers (y), information about the sizes if the layers of the neural network to determine the cost, and extra variables like lambda(λ) and training set size(m). 
The cost function of a neural network I learned to be J=−1/m ∑ [y (i)log(hθ(x(i)))+(1−y(i)) log(1−hθ(x(i)))]+ 2mλ∑(θj)^2, with hθ (hypothesis) being equal to a3, which comes from a long string of hypothesis calculations between my layers.
The conversion of code/ideas from Octave (the programming language where I learned about neural network's from the tutorial
series) to Python was easily the hardest part of this project. Python has a vastly different way of dealing with matrices which I had to learn more about Numpy to use. I also had to learn how to find the local minima of the neural network by using Python's optimization library. It was a nice challenge and learning experience to create the machine learning algorithms from scratch, but I also know how how to use alternatives like using SkLearn.
`,
      },
      {
        title: "Neural Network Training Code",
        language: "python",
        codeSnippet: `@app.route('/trainNeural', methods=['POST'])
def trainNeural():
  try:
    data = request.get_json(silent=True)
    nnData = data.get('nnData')
    actual = data.get('actual')
    x, y, unscaledX, theta = nnData['x'], nnData['y'], nnData['unscaledX'], nnData['theta']
    y.insert(0, getWeatherType(actual))
    x, y, unscaledX, theta = np.matrix(x), np.asarray(y), np.matrix(unscaledX), np.matrix(theta)
    machineNeural(x, y, unscaledX, 1, theta=theta)
    response = json.dumps({'response': "Finished!"})
    return response,200
  except:
    response = json.dumps({'response': "Failed!"})
    return response, 400`,
        codeDescription: `Here's how I was able to train my neural network given user inputted data. 
        With Flask, I was able to get communication from the frontend in React to my Python backend.
        I then got the data I had for my network stored in pickle files. 
        After that, I recalled my algorithm, going through the process of training it with 1 iteration. 
        If all goes well, the frontend is told that it's finished training, otherwise a failure message is sent.
        `,
      },
    ],
  },
  {
    title: "MangaRec",
    img: require("../assets/Mangarec.jpg"),
    gif: require("../assets/Mangarec.gif"),
    topics: [
      "Fullstack",
      "Mobile Development",
      "Flutter/Dart",
      "NodeJS",
      "Javascript",
      "Typescript",
      "Database Management",
      "AWS",
      "SQL",
      "API Calling",
    ],
    text: [
      "An app that acts as a recommender and a user database for manga. Recommendation system uses an Euclidean distance algorithm.",
      "Database uses AWS with SQL, having a bucket for images.",
      "API calls with automatic updates for getting manga data from a database.",
      github + "https://github.com/JustinWeintraub/MangaRec",
    ],
    code: [
      {
        language: "dart",
        title: "Design Code",
        codeSnippet: `class _CustomChipState extends State<CustomChip> {
  @override
  void updateState(selected) {
    setState(() {
      widget._isSelected = selected;
    });
    widget._isSelected = selected;
  }

  @override
  Widget build(BuildContext context) {
    String _name = widget._name;
    Function _onClick = widget._onClick;
    bool _isSelected = widget._isSelected;
    return FilterChip(
      labelStyle: TextStyle(color: _isSelected ? Colors.black : Colors.grey),
      onSelected: (bool selected) {
        setState(() {
          widget._isSelected = !widget._isSelected;
        });
        if (_onClick != null) _onClick(_name, widget._isSelected);
      },
      backgroundColor: Colors.white12,
      label: Text(_name),
    );
  }
}`,
        codeDescription: `This code showcases how a chip is made, utilized in searching for genres. 
        Highlighting to showcase skills in state management, and design in dart. 
        Not showcased here is a user inheritance system through a JWT that gets data about the user.
        `,
      },
      {
        language: "javascript",
        title: "Recommendation Code",
        codeSnippet: `function getIn(dataset, p1, p2) {
  let inp1p2 = {};
  for (let item in dataset[p1]) {
    if (item in dataset[p2]) {
      inp1p2[item] = 1;
    }
  }
  return inp1p2;
}
// two scores to choose from
//calculate the euclidean distance btw two item
export function euclideanScore(dataset, p1, p2) {
  //store item ining in both item
  //if dataset is in p1 and p2
  //store it in as one
  const inp1p2 = getIn(dataset, p1, p2);

  for (let key in dataset[p1]) {
    if (key in dataset[p2]) {
      inp1p2[key] = 1;
    }
  }
  if (Object.keys(inp1p2).length == 0) return 0; //check if it has a data
  const sum_of_euclidean_dist = []; //store the  euclidean distance

  //calculate the euclidean distance
  for (const item in dataset[p1]) {
    if (item in dataset[p2]) {
      sum_of_euclidean_dist.push(
        Math.pow(dataset[p1][item] - dataset[p2][item], 2)
      );
    }
  }
  let sum = 0;
  for (let i = 0; i < sum_of_euclidean_dist.length; i++) {
    sum += sum_of_euclidean_dist[i]; //calculate the sum of the euclidean
  }
  //since the sum will be small for familiar user
  // and larger for non-familiar user
  //we make it in between 0 and 1
  let sum_sqrt = 1 / (1 + Math.sqrt(sum));
  return sum_sqrt;
}`,
        codeDescription: `Here's the Euclidean algorithm that's used for recommendation. 
        It takes in two users and finds what projects they have in common firstly. 
        Afterwards, it calculates the distance between the users based on their commonality.
        Based on what user the algorithm chooses as the closest users, the frequency of manga determines what's reccomended.
        `,
      },
      {
        language: "dart",
        title: "API Update Code",
        codeSnippet: `export async function autoUpdate() {
  const mangaData = await Manga.findAll({
    where: {
      updatedAt: {
        [Op.lte]: moment().subtract(1, "days").toDate(), // change to decrease the frequency
      },
    },
    order: [["updatedAt", "ASC"]],
  });
  const interval = 4000;
  await login();
  for (let i = 0; i < mangaData.length; i++) {
    setTimeout(() => updateSingular(mangaData[i]), interval * i);
  }
  setTimeout(
    () => autoUpdate(),
    interval * mangaData.length + 1000 * 60 * 60 * 24
  );
}

// updates a singular manga in database
async function updateSingular(manga) {
  try {
    const updatedManga = await getAllMangaData(manga["id"]);
    manga["views"] = updatedManga["views"];
    manga["title"] = updatedManga["title"];
    manga.save();
  } catch (e) {}
}`,
        codeDescription: `Every day a manga is updated, one manga every 4000ms. 
        Updating is done primarily so the number of views and the title reflects accurate information gotten from MangaDex's API. 
        The code first checks the database to see if a manga needs an update, then updates accordingly.  `,
      },
    ],
  },
  {
    title: "Kirby Tracker",
    img: require("../assets/KirbyTracker.jpg"),
    gif: require("../assets/KirbyTracker.gif"),
    topics: [
      "React",
      "React Native",
      "Mobile Development",
      "Fullstack",
      "Typescript",
      "Javascript",
      "NodeJS",
      "Object Oriented",
      "API Calling",
      "Firebase",
    ],
    text: [
      "A React Native/Firebase project. Companion tool for playing Kirby video games, keeping track of your progress and giving tips to get all the collectables in the games listed. Utilizes typescript. Utilizes web scraping to get the data for each game, including information about every treasure in said game. Uses recursion to keep track of completed levels for each user.",
      github + "https://github.com/JustinWeintraub/Kirby-Tracker",
    ],
    code: [
      {
        title: "Recursive Update Code",
        language: "typescript",
        codeSnippet: `export async function updateChildren({
  currentName,
  value,
  childNames,
  selected,
}: ChildrenProps) {
  //recursive function that aggregates selected of current and children, going off of a name based system
  //starts at layer of updater, ie current
  await AsyncStorage.setItem(currentName + " selected", value.toString());
  selected[currentName] = value;

  if (childNames.constructor == Object) { // has children
    for (let childName of Object.keys(childNames)) {
      await updateChildren({
        currentName: currentName + " " + childName,
        value,
        childNames: childNames[childName],
        selected,
      });
    }
    return selected;
  } else return selected;
}`,
        codeDescription: `Here is an example of the recursion used for the selection system with for example the levels and the level collectables. 
The case of updating the children is simpler than the other way around, with all that's necessary is passing down the selected value into each child and updating.
In the case of updating parents it goes to highest parent layer, recursively checking if each child is selected and updating each parent layer accordingly.`,
      },
      {
        title: "Design Code",
        language: "typescript",
        codeSnippet: `import React from "react";
import { View, ViewStyle, Text, StyleSheet } from "react-native";

export default function AppText(props: TextProps) {
  const { propStyles, style, text } = props;
  return (
    <View style={style}>
      <Text
        style={propStyles.map((exStyle: string) => {
          return styles[exStyle];
        })}
      >
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create<StyleProps>({
  /* ... */ 
  white: {
    color: "white",
    textShadowOffset: { width: 0, height: 0 },
    textShadowColor: "black",
    textShadowRadius: 3,
  },
  /* ... */
});

interface StyleProps {
  [key: string]: ViewStyle;
}
interface TextProps {
  propStyles: Array<string>;
  style?: ViewStyle;
  text: string;
}

`,
        codeDescription: `This code is meant to highlight my knowledge in typescript and react native. 
This component was used to display all the text in the app, each coming with custom styles and properties. 
PropStyles were specific for the text while Style was for the container of said text.`,
      },
      {
        title: "Data Getting/Storing Code",
        language: "javascript",
        codeSnippet: `exports.getGame = functions.https.onRequest(async (req, res) => {
  // Grab the text parameter.
  const game = req.query.game;
  const validGames = [
      "Kirby Planet Robobot",
      "Kirby Triple Deluxe",
      "Kirby Star Allies",
  ];
  if (!validGames.includes(game))
      return res.json(gameError);
  const db = admin.firestore();
  const ref = db.collection("gameData").doc(game);
  ref
      .get()
      .then((doc) => {
      const data = doc.data();
      if (data)
          return res.json({ data });
      else {
          const ref2 = db.collection("Collectables").doc(game);
          ref2
              .get()
              .then((doc2) => {
              const dataToScrape = doc2.data()["Stages"];
              const scrapeFunction = game === "Kirby Star Allies" ? starAlliesScrape : scrape;
              scrapeFunction(dataToScrape).then((scrapedData) => {
                  admin
                      .firestore()
                      .collection("gameData")
                      .doc(game)
                      .set({ storedData: scrapedData });
              });
              return res.json({ success: true, response: "Game data stored." });
          })
              .catch(() => {
              return res.json(genericError);
          });
      }
  })
      .catch(() => {
      return res.json(genericError);
  });
});`,
        codeDescription: `This code highlights one of my custom api functions in firebase for getting a game's data. 
If the game's data doesn't exist then it populates it using my scraper, but if it does it returns the data for the game. 
If anything breaks an error is given to tell the user that a problem occurred.`,
      },
    ],
  },
  {
    title: "Project Manager",
    img: require("../assets/ProjectManager.jpg"),
    topics: ["Javascript", "Processing/Java", "Fullstack", "Web Design", "Database Management", "API Calling", "AWS", "SQL"],
    text: [
      "This was a project done for my software engineering class in a team of 4, where we made a project management software using a Javascript Frontend and an AWS Lambda based backend using Java. For routing, we used Api Gateway. We used S3 to store the website. And for the database, we used RDS with MySQL. Our testing suite had 90% code coverage of our backend and the backend code followed object oriented design. This project is no longer functional due to us no longer paying for the AWS tools.",
      github + "https://github.com/Suryanshg/ProjectManager",
      heroku + "http://softengproject3733.s3-website.us-east-2.amazonaws.com/"
    ],
    code: [
      { 
        title: "Adding a Task to a Project",
        language: "java",
        codeSnippet: `public class TaskDAO {
  java.sql.Connection conn;
  TeammateTaskDAO ttDAO;

  public TaskDAO() {
    try {
      conn = DatabaseUtil.connect();
      ttDAO = new TeammateTaskDAO();
    } catch (Exception e) {
      e.printStackTrace();
      conn = null;
    }
  }
  public Boolean addTask(Task task, String parentTask, String projectid) throws Exception {
    try {
      String statement = String.format("SELECT * FROM Task WHERE title = ? AND parentTask %s ? AND Project %s ?;",
          parentTask == null ? "IS" : "=", projectid == null ? "IS" : "=");
      PreparedStatement ps = conn
          .prepareStatement(statement);
      ps.setString(1, task.title);
      if (parentTask != null)
        ps.setString(2, parentTask);
      else
        ps.setNull(2, Types.NULL);
      if (projectid != null)
        ps.setString(3, projectid);
      else
        ps.setNull(3, Types.NULL);

      ResultSet resultSet = ps.executeQuery();
      // If the task is already present then return false
      // resultSet.getString("title");
      while (resultSet.next()) {
        resultSet.close();
        return false;
      }
    } catch (Exception e) {
    }
    try {

      // Setting up the outline number
      String statement = String.format("SELECT count(*) AS count FROM Task WHERE parentTask %s ? AND Project %s ?;",
          parentTask == null ? "IS" : "=", projectid == null ? "IS" : "=");
      PreparedStatement ps = conn
          .prepareStatement(statement);
      if (parentTask != null)
        ps.setString(1, parentTask);
      else
        ps.setNull(1, Types.NULL);
      if (projectid != null)
        ps.setString(2, projectid);
      else
        ps.setNull(2, Types.NULL);
      ResultSet resultSet = ps.executeQuery();
      while (resultSet.next()) {
        task.outlineNumber = String.valueOf(resultSet.getInt("count") + 1);
        resultSet.close();
        break;
      }

      // Creating a new task
      ps = conn.prepareStatement(
          "INSERT INTO Task (id, title, completed, parentTask, Project, outlineNumber) values(?,?,?,?,?,?);",
          Statement.RETURN_GENERATED_KEYS);
      ps.setString(1, task.id.toString());
      ps.setString(2, task.title);
      ps.setBoolean(3, task.completed);
      if (parentTask != null)
        ps.setString(4, parentTask);
      else
        ps.setNull(4, Types.NULL);
      if (projectid != null)
        ps.setString(5, projectid);
      else
        ps.setNull(5, Types.NULL);
      ps.setString(6, task.outlineNumber);
      ps.execute();

      return true;

    } catch (Exception e) {
      throw new Exception("Failed to insert task: " + e.getMessage());
    }
  }
}`,
      codeDescription: `
      Through SQL queries, this code does the task of adding a task to a project.
      It first checks to see if the tasks exists, and if so, returns false.
      It then sets the outline number, or in other terms setting the task # for the project.
      Lastly, a task object is created and is appended to the database.`
      },
      {
        title: "Test Cases",
        language: "java",
        codeSnippet: `public class CreateTaskHandlerTest extends LambdaTest {

  List<Task> testInput(String incoming, int outgoing) throws IOException {
    CreateTaskHandler handler = new CreateTaskHandler();
    CreateTaskRequest req = new Gson().fromJson(incoming, CreateTaskRequest.class);
    CreateTaskResponse response = handler.handleRequest(req, createContext("create task"));
    System.out.println(response.error);
    assertEquals(outgoing, response.statusCode);
    return response.task;
  }

  void deleteTask(String id) throws IOException {
    TaskDAO dao = new TaskDAO();
    Boolean result;
    try {
      result = dao.deleteTask(id);
      assertEquals(result, true);
    } catch (Exception e) {
      assertEquals(false, true); // always fails
    }
  }

  @Test
  public void createTaskTestPasses() {
    String title = "test139";
    String projectid = "0bc22c80-a9d6-43a1-b1f2-7fba045eae0b";
    String parentTask = null;
    String SAMPLE_INPUT_STRING = "{"title": "" + title + "","projectid": "" + projectid
        + "", "parentTask": " + parentTask + "}";
    int RESULT = 200;

    try {
      List<Task> task = testInput(SAMPLE_INPUT_STRING, RESULT);
      assertEquals(task.get(0).title, title);
      deleteTask(task.get(0).id.toString());
    } catch (IOException ioe) {
      Assert.fail("invalid: " + ioe.getMessage());
    }
  }

  @Test
  public void createTaskTestFails() throws Exception {
    // Let's create a Task with the same title and projectid in the DB
    TaskDAO dao = new TaskDAO();
    Task task = new Task("testFail");
    dao.addTask(task, null, "0bc22c80-a9d6-43a1-b1f2-7fba045eae0b");

    String SAMPLE_INPUT_STRING = "{"title": "testFail","projectid": "0bc22c80-a9d6-43a1-b1f2-7fba045eae0b"}";
    int RESULT = 422;

    try {
      testInput(SAMPLE_INPUT_STRING, RESULT);
      dao.deleteTask(task.id.toString());
    } catch (IOException ioe) {
      Assert.fail("invalid: " + ioe.getMessage());
    }
  } ...`,
      codeDescription: `
      This code is an example of some the testing we do, specifically for the functionality of creating a task.
      I've shown off two of the tests done, one where a task creation fails and one where it succeeds.
      In the first scenario, the test succeeds because the task wasn't made in the database, but in the second it fails because the task was already made.
      We test to see if we get the correct succeed/fail message.
      `
      }
    ]
  },
  {
    title: "Game Visualization",
    img: require("../assets/GameVisualization.png"),
    topics: ["Python", "Visualization", "Data Cleanup", "API Calling"],
    text: [
      "This is a visualization project for displaying data of percentage of 500 popular games coming from each country between the years 2011 and 2019. The term popular game being from the data gotten the API IGBD. I had to do multiple push requests, needing to find the popular games first, then the companies who made the games, then finally the country of origin. The visualization is done using Bokeh, with some features I'd like to highlight being hovering over countries to see exact percentages and a slider for choosing the year.",
      github + "https://github.com/JustinWeintraub/GameVisualization",
      heroku + "https://map-weintraub.herokuapp.com/",
    ],
    code: [
      {
        title: "API Call Code",
        language: "python",
        codeSnippet: `
random.shuffle(gameIds)
rawData = ""
for j in range(0, 10):
    # stringIds contains 50 games out of 500
    stringIds = str(gameIds[j*50:(j+1)*50])
    stringIds = "(" + stringIds[1:len(stringIds)-1] + ")"

    # multi query to get company countries
    rawData += '''
    query companies "''' + str(j) + '''" {
        fields name, country;
        where published = ''' + str(stringIds) + '''
        & country >= 0; 
        limit 500; 
        sort popularity desc;
    };
        '''

    # requesting combined data
response = requests.post(
    "https://api-v3.igdb.com/multiquery",
    headers={"user-key": os.environ.get('USERKEY')},
    data=str(rawData)
)`,
        codeDescription: `
    An interesting problem I faced was when I had to find the companies that made the 
    popular games using the API every year by searching by gameIds. 
    I made my request and noticed multiple problems. It only listed a company once, even if a company has made multiple games in that year. 
    And since multiple companies can make a game, the amount of companies can go above a query limit of 500.
    Having an API call limit, my solution would be to use a tool called a multi query as seen here. 
    IGBD's multi query allows for 10 queries at once. 
    I randomly split up each year into 10 separate intervals, calling the API from there.
    Although this approach definitely missed out on data from some of the larger companies, 
    this drawback is offset by the fact that smaller companies sometimes don't have data from companies region of origin.
    `,
      },
    ],
  },

  {
    title: "Pokemon Battle",
    img: require("../assets/Pokemon.jpg"),
    gif: require("../assets/Pokemon.gif"),
    topics: [
      "Processing/Java",
      "Games/Simulations",
      "Design",
      "Object Oriented",
    ],
    text: [
      "Created a game that emulates the popular Pokemon game, specifically demonstrating the battle system using data analysis of csv files. Mirrored the art style of the game using Processing's drawing tools.",
      github +
        " and gifs of it in action https://github.com/JustinWeintraub/PokemonBattle",
    ],
    code: [
      {
        title: "Typewriter Effect Code",
        language: "java",
        codeSnippet: `positionInText++;
if(positionInText>currentText.length()*5 && (action!="Fainted"||textLag.size()>0))
{
  changeText();
}
void changeText(){ 
    String text="";
    boolean refresh=false;
    if(textLag.size()==0 && player.fainted==false && opponent.fainted==false)refresh =checkCurrentTurn();
    if(textLag.size()>0){
      text=textLag.get(0);
      textLag.remove(0);
    }
    else{
    if(refresh){
      background.action="Moves";
      if(player.moves.get(cursor[0]+cursor[1]*2).charging==true)cursorChange=false;
      else cursorChange=true;
    }
    }
    currentText=text;
    currentTextPart="";
    positionInText=0;
  }`,

        codeDescription: `One of the hardest parts of this project was getting the text to appear in real time.
      To do this I needed to implement a text scroll and a text lag system, each with it's own challenge.
      The text scroll would work on the variables currentText, currentTextPart and positionInText. 
      As time goes on the currentTextPart increases in length until it reaches the currentText which is displayed on screen.
      The text lag is an array of words that have yet to be fully displayed that it goes through as well.
      Depending on the text that's completed you'll go back to the attack screen.
      `,
      },
      {
        title: "CSV Reader Code",
        language: "java",
        codeSnippet: `
//Determines if move is super effective using csv file
float superModifier(String[] defendingType, String[] attackingType){
float modifier = 1;
for(int i=0; i<1; i++){
  for(int j=0; j<defendingType.length; j++){
    for (TableRow row : typeChart.rows()) {
      if(row.getString("Attacking").equals(attackingType[i])){
        modifier*=float(row.getString(defendingType[j]));
      }
  }
  }
  }
  return modifier;
}`,
        codeDescription: `This was interesting as I had to use a square csv table to get the type matchups,
        determining if one type is super effective vs another or the like. 
        My solution was to iterate through the columns and then the rows, getting the value of the row and column name.`,
      },
    ],
  },
  {
    title: "Reddit Home Page",
    img: require("../assets/Reddit.png"),
    topics: [
      "Python",
      "Flask",
      "Web Design",
      "Database Management",
      "API Calling",
      "SQL",
      "Fullstack",
    ],
    text: [
      "Database management and web development was utilized to display custom home pages with the ability to save the front pages from multiple dates. Used multiple programming languages.",
      github + "https://github.com/JustinWeintraub/RedditHomePage",
      heroku + "https://weintraubreddit.herokuapp.com/",
    ],
    code: [
      {
        title: "Auto Update Call",
        language: "python",
        codeSnippet: `def getDatabase(day):
  connection = getConnection()
  cursor = connection.cursor(buffered=True)
  try:
    cursor.execute(('''SELECT * FROM {}.posts 
                    WHERE DATE = '{}'
                    ORDER BY RAND()
                    ''').format(os.environ.get('database'), day))
    cursor.close()
    connection.commit()
    connection.close()
    if(cursor.rowcount==0):
      if(str(day.replace("/","-"))!= str(date.today())):
        return
      createData(day)
    else: 
      return cursor
    return(getDatabase(day))
  except:
    createDatabase(day)
    return(getDatabase(day))`,
        codeDescription: `
      The most interesting part of this project to me was getting the data. To do this, I checked if my SQL
      database had data for the current day for posts. If not, I'd get data to put in the database with my api and recall the function. 
      Otherwise I'd get the data for today, randomize it, and return it to be displayed.
      `,
      },
    ],
  },
  {
    title: "Heart Disease Network",
    img: require("../assets/Disease.png"),
    topics: ["Python", "Data Cleanup", "Machine Learning", "Visualization"],
    text: [
      "Utilized the programming language Python with data science tools to perform data cleanup, data training/machine learning with a decision tree algorithm to make inferences and visualization.",
      github +
        " and results https://github.com/JustinWeintraub/HeartDiseaseNetwork",
    ],
    code: [
      {
        title: "Data Cleanup Code",
        language: "python",
        codeSnippet: `for line in file_object:
  if(line[1] != "a"):  # ignoring first row
      # spliting data points by commas, as in the sql file
      a = line.split(",")
      if(a[len(a)-1] == '0\n'):  # converting results to 0 and 1, symbolizing success and failure
          a[len(a)-1] = "0"
      else:
          a[len(a)-1] = "1"
      for letter in range(0, len(a)):
          a[letter] = float(a[letter])  # converting numbers to floats
      x.append(a[0:len(a)-1])
      y.append(a[len(a)-1])  # target
  else:
      data = line.split(",")
      for label in data:
          if(label != data[len(data)-1]):
              labels.append(label)`,
        codeDescription: `What I wanted to highlight here was my data cleanup. This project was done before I learned how to easily read csv files with Pandas so I used my own techniques for cleanup. 
        I had to go about this one step at a time, debugging various problems. The problems included getting rid of commas and new lines, as well as converting all numbers to floats so my decision tree didn't break and could work effectively.`,
      },
    ],
  },
  {
    title: "Blog & Chat",
    img: require("../assets/Django.png"),
    topics: [
      "Python",
      "Django",
      "Web Design",
      "Database Management",
      "Fullstack",
      "AWS",
    ],
    text: [
      "Used web design to create a website that acted as a blog and a chatroom, including posting and commenting functionality. Partly done by following along with a tutorial series, with functionality like the chatroom and commenting being done entirely by me. Database stored in AWS.",
      github + "https://github.com/JustinWeintraub/blog",
      heroku + "https://justinweintraub.herokuapp.com/",
    ],
    code: [
      {
        title: "Chatroom Code",
        language: "javascript",
        codeSnippet: `
def log(request):
  results = ChatMessage.objects.all()
  for i in results:
      if(i.author.profile.online()==False):
          i.delete()
  returner=""
  for i in results:
      returner+=("<p>"+str(i.author)+": "+str(i.content)+"</p>")
  return HttpResponse(returner)

class Profile(models.Model):
    user=models.OneToOneField(User, on_delete=models.CASCADE)
    image=models.ImageField(default='default.jpg', upload_to='profile_pics')
    def __str__(self):
        return f'{self.user.username} Profile'
    def last_seen(self):
        return cache.get('seen_%s' % self.user.username)
    def online(self):
        if self.last_seen():
            now = datetime.datetime.now()
            if now > self.last_seen() + datetime.timedelta(seconds=settings.USER_ONLINE_TIMEOUT):
                return False
            else:
                return True
        else:
            return False
  `,
        codeDescription: `The most unique feature I added to this project was the chatroom, and more specifically, 
          the component where messages from users who aren't online are automatically deleted.
          I have here two things: The function that changes the comments based on if the user is online/other factors 
          and the user model that partly determines if the user is online based on if the cache's time limit is less than the user timeout time + the current time. 
          I also use the cache system to automatically log out a user.`,
      },
    ],
  },
  {
    title: "Fished",
    img: require("../assets/Fished.jpg"),
    gif: require("../assets/Fished.gif"),
    topics: ["Processing/Java", "Games/Simulations", "Physics"],
    text: [
      "A simulation for birds, fish, and puffer fish. The birds try to eat the fish and the puffer fish eat them all. Used physics concepts such as forces and velocity to create flow fields, a seeking algorithm, pack based movement, and more.",
      github + "https://github.com/JustinWeintraub/Fished",
    ],
    code: [
      {
        title: "Seeking Algorithm Code",
        language: "java",
        codeSnippet: `
void seek() {
  //moves by a steering force instead of direct movement
  PVector desiredVelocity = PVector.sub(target.location, location);
  desiredVelocity.limit(maxSpeed);
  PVector steer = PVector.sub(desiredVelocity, velocity);
  steer.limit(maxForce);
  applyForce(steer);
}
boolean reached() {
  //determines if reaches a fish/target
  float d = PVector.sub(target.location, location).mag();
  if (d < 5) return true;
  return false;
}
`,
        codeDescription: ` My challenge was trying to make a seeking/reaching algorithms for the birds who try to catch fish.
      To make this happen fluidly I use desiredVelocity, which is just the distance between objects, and turned that into a steering force of limited quantity. 
      Using physics concepts such as distance and acceleration I'm able to make the bird move and detect if it reached the fish.
      `,
      },
      {
        title: "Wind Simulation Code",
        language: "java",
        codeSnippet: `
void display() {
  fill(#0077be, 150);
  noStroke();
  rect(water.x,water.y,width,height);
  if (showFlow == false) return;
  for (int row = 0; row < float(numrows)/height*water.y; row++) {
    for (int col = numcols-int(random(1,100)); col >= 0; col-=int(random(1,100))) {
      //wind is drawn in a few locations on the screen
      PVector p = flow[row][col];
      pushMatrix();
      translate(col*resolution, row*resolution);
      stroke(175);
      rotate(p.heading());
      line(-randomGaussian()/2.5*resolution, 0, randomGaussian()/2.5*resolution, 0);
      popMatrix();
    }
    }
  
}`,
        codeDescription: `Another thing I wanted to add onto my project was making the flow field that determines general movement look like wind (click the gif to see the wind in detail). 
To do that I randomly assigned which columns of flow field would get displayed at any given movement. It changes every few frames so the randomness makes it look like wind travelling. The wind's length is determined by a random gaussian, and the angle is determined by the direction of the flow field at that moment (which changes based off noise).`,
      },
    ],
  },
  {
    title: "Vidly",
    img: require("../assets/Vidly.png"),
    topics: [
      "Javascript",
      "React",
      "Web Design",
      "Database Management",
      "Object Oriented",
      "Fullstack",
      "NodeJS",
    ],
    text: [
      "Used my skills in web design to display a movie database with authentication and database management. Done by following along with a tutorial series, testing my skills in it's various coding challenges, as a way to learn React.",
      github + "https://github.com/JustinWeintraub/vidly",
      heroku + "https://quiet-escarpment-48437.herokuapp.com/",
    ],
    code: [
      {
        title: "Axios Setup Code",
        language: "javascript",
        codeSnippet: `
import axios from "axios";
import logger from "./logService";
import { toast } from "react-toastify";

axios.defaults.baseURL=process.env.REACT_APP_API_URL;
axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    logger.log(error);
    toast.error("An unexpected error occurrred.");
  }

  return Promise.reject(error);
});

function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt
};
        `,
        codeDescription: `Although I didn't make this myself, this was a part of a coding challenge from the tutorial series I first attempted. 
        Through this process I learned a lot about how middleware should work, being as abstracted as possible. 
        This code turns the basic parts of dealing with servers like error handling into simple functions. It also displays the error to the user in a simple manor
        through the use of toast, a popup that gets displayed. I have used the knowledge gained from this process many times, from using other middle ends in a similar manor to abstracting other parts of my code.
        `,
      },
      {
        title: "Form Code",
        language: "javascript",
        codeSnippet: `
render() {
  return (
    <div>
      <h1>Movie Form</h1>
      <form onSubmit={this.handleSubmit}>
        {this.renderInput("title", "Title")}
        {this.renderSelect("genreId", "Genre", this.state.genres)}
        {this.renderInput("numberInStock", "Number in Stock", "number")}
        {this.renderInput("dailyRentalRate", "Rate")}
        {this.renderButton("Save")}
      </form>
    </div>
  );
}`,
        codeDescription: `This is the movie form, one of the longest challenges I had to do. As you can see, the form being rendered is extremely short. 
  This is because of the abstraction skills I learned when it comes to React's syntax. Movie form inherits from another component called form, which deals with displaying form components like inputs and selection, as well as validation. Everything is made so it's easy to reuse in the future.`,
      },
    ],
  },
  {
    title: "This Website",
    img: require("../assets/Look.png"),
    topics: ["Javascript", "Vue", "Web Design", "Object Oriented"],
    text: [
      "This website was my first foray into Vue with a focus more onto website design. It was also a useful project in helping me learn how to make my code cleaner, having subdirectories for each component and page. Lifecycle hooks were utilized to display the multi select.",
      github + "https://github.com/JustinWeintraub/portfolio",
    ],
  },
  {
    title: "Mountains",
    img: require("../assets/Mountains.png"),
    topics: ["Processing/Java", "Visualization"],
    text: [
      "A visual based project that uses randomly generated mountains and backgrounds based on perlin noise. Animated a sun, people in the background, and shifting mountain colors to emulate changes in the day.",
      github + "https://github.com/JustinWeintraub/mountains",
    ],
    code: [
      {
        title: "Perlin Noise Code",
        language: "java",
        codeSnippet: `
void drawClouds(){
  loadPixels();
  for (int y=0; y<height; y++){
    for(int x=0; x<width; x++){
      float n=noise(x/100.0,y/100.0); //clouds uses 2d perlin noise of x and y
      color c=lerpColor(color(200),color(pixels[y*width+x]),pow(n,map(y, 0, height/2, 2, .1)));
      pixels[y*width+x]=c; //lerp colors from cloud to background, power allows for less clouds as you go down

    }
    updatePixels();
  }
}`,
        codeDescription: `
The most interesting visualization in this I feel are the clouds. The clouds use 2D perlin noise to determine cloud opacity, similar to how the mountains use noise to create a path.
I then use that noise and combine it with the color of the sky, making it fade into the background. A fun fact about this is that video games used a similar technique to display clouds in the past.  `,
      },
    ],
  },
];

projects.forEach((item, i) => {
  item.id = i;
});

export { projects };
