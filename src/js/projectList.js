export const topics = [
  "Python",
  "Javascript",
  "Processing/Java",
  "Web Design",
  "Design",
  "Database Management",
  "Object Oriented",
  "Visualization",
  "Machine Learning",
  "Games/Simulations",
  "Data Cleanup",
  "API Calling",
  "Physics",
  "React",
  "Flask",
  "Vue",
  "Django",
  "SQL",
];
const github = "Github link with more details";
const heroku = "Link to project in action";
const projects = [
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
      "A cumulative machine learning and web design project based around weather. A linear regression algorithm that also uses data mapping and scaling is used to predict temperature. A neural network is used to predict weather condition, having the ability to be trained with frontend user given info. Machine learning algorithms were made with knowledge gained from Andrew Ng's Coursera series. ",
      github + "https://github.com/JustinWeintraub/weather",
      heroku + "https://weintraub-weather.herokuapp.com/",
    ],
    code: [
      {
        language: "python",
        codeSnippet: `
def nnCost(nn_params,*args):
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

theta = optimize.fmin_cg(nnCost, initial_nn_params,fprime=nnGradient, args=args, maxiter=iterations)
`,
        codeDescription: `Pretty long isn't it? This is my neural network's regularized cost function to be minimized and how it's called. 
It uses given parameters, specially the inputs (X), expected answers (y), information about the sizes if the layers of the neural network to determine the cost, and extra variables like lambda(λ) and training set size(m). 
The cost function of a neural network I learned to be J=−1/m ∑ [y (i)log(hθ(x(i)))+(1−y(i)) log(1−hθ(x(i)))]+ 2mλ∑(θj)^2, with hθ (hypothesis) being equal to a3, which comes from a long string of hypothesis calculations between my layers.
The conversion of code/ideas from Octave (the programming language where I learned about neural network's from the tutorial
series) to Python was easily the hardest part of this project. Python has a vastly different way of dealing with matrices which I had to learn more about Numpy to use. I also had to learn how to find the local minima of the neural network by using Python's optimization library. It was a nice challenge and learning experience to create the machine learning algorithms from scratch, but I also know how how to use alternatives like using SkLearn.
`,
      },
      {
        language: "python",
        codeSnippet: `
@app.route('/trainNeural', methods=['POST'])
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
    return response, 400
          `,
        codeDescription: `I also wanted to mention how I was able to train my neural network given user inputted data. 
        With Flask, I was able to get communication from the frontend in React to my Python backend.
        I then got the data I had for my network stored in pickle files. 
        After that, I recalled my algorithm, going through the process of training it with 1 iteration. 
        If all goes well, the frontend is told that it's finished training, otherwise a failure message is sent.
        `,
      },
    ],
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
    img: require("../assets/Pokemon.gif"),
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
        language: "java",
        codeSnippet: `
positionInText++;
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
    ],
    text: [
      "Database management and web development was utilized to display custom home pages with the ability to save the front pages from multiple dates. Used multiple programming languages.",
      github + "https://github.com/JustinWeintraub/RedditHomePage",
      heroku + "https://weintraubreddit.herokuapp.com/",
    ],
    code: [
      {
        language: "python",
        codeSnippet: `
def getDatabase(day):
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
    return(getDatabase(day))

      `,
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
    topics: ["Python", "Django", "Web Design", "Database Management"],
    text: [
      "Used web design to create a website that acted as a blog and a chatroom, including posting and commenting functionality. Partly done by following along with a tutorial series, with functionality like the chatroom and commenting being done entirely by me. Database stored in AWS.",
      github + "https://github.com/JustinWeintraub/blog",
      heroku + "https://justinweintraub.herokuapp.com/",
    ],
    code: [
      {
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
    img: require("../assets/Fished.gif"),
    topics: ["Processing/Java", "Games/Simulations", "Physics"],
    text: [
      "A simulation for birds, fish, and puffer fish. The birds try to eat the fish and the puffer fish eat them all. Used physics concepts such as forces and velocity to create flow fields, a seeking algorithm, pack based movement, and more.",
      github + "https://github.com/JustinWeintraub/Fished",
    ],
    code: [
      {
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
    ],
    text: [
      "Used my skills in web design to display a movie database with authentication and database management. Done by following along with a tutorial series, testing my skills in it's various coding challenges, as a way to learn React.",
      github + "https://github.com/JustinWeintraub/vidly",
      heroku + "https://quiet-escarpment-48437.herokuapp.com/",
    ],
    code: [
      {
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
    topics: ["Javascript", "Vue", "Web Design", "Design", "Object Oriented"],
    text: [
      "This website was my first foray into Vue with a focus more onto website design. It was also a useful project in helping me learn how to make my code cleaner, having subdirectories for each component and page. Lifecycle hooks were utilized to display the multi select.",
      github + "https://github.com/JustinWeintraub/portfolio",
    ],
  },
  {
    title: "Mountains",
    img: require("../assets/Mountains.png"),
    topics: ["Processing/Java", "Design", "Visualization"],
    text: [
      "A visual based project that uses randomly generated mountains and backgrounds based on perlin noise. Animated a sun, people in the background, and shifting mountain colors to emulate changes in the day.",
      github + "https://github.com/JustinWeintraub/mountains",
    ],
    code: [
      {
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
