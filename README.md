#Recipe Keeper

Recipe Keeper is a user-friendly website designed to help users discover and organize their favourite recipes. Whether you're a seasoned chef or just starting out in the kitchen, Recipe Keeper offers a platform where you can upload your own recipes, explore recipes shared by others, and keep track of your culinary creations.

![Website view on various screen sizes]()

[Access the live site here.](https://recipe-keeper-project-967d6327becc.herokuapp.com/)

## Deployment

## Live

The project was deployed to [Heroku](https://dashboard.heroku.com/). [Access the live site here.](https://recipe-keeper-project-967d6327becc.herokuapp.com/)

### Heroku

To deploy your app on [Heroku](https://www.heroku.com/platform), these are the steps to follow: 

1. Create a requirements.txt and a Procfile, within your project.
2. The requirements.txt file contains all the applications and dependencies that are required to run the app. To create the requirements.txt file run the following command in the terminal:

    ```bash
    pip3 freeze --local > requirements.txt
    ```
3. The Procfile tells Heroku which files run the app and how to run it. To create the Procfile run the following command in the terminal:

    ```bash
    echo web: python run.py > Procfile
    ```
    NOTE: This is assuming the file used to launch your app is called run.py, otherwise replace with the correct file name. The Procfile uses a capital P and doesn't have a file extension on the end.
4. If the Procfile has been created correctly it will display the Heroku logo next to it. Ensure there are no blank lines at the end of the file, as this can cause issues when deployiong.
5. Make sure to save these files, then add, commit and push to GitHub.
6. Sign up for an account with Heroku.
7. Click New button and select Create New App.
8. Choose a name for your app (This must be unique).
9. Select a region (EU or USA) and click Create App.
10. Choose your connection method, I used automatic deployment from the GitHub repo. 
11. Make sure your GitHub profile is displayed and search for the repository. You may need to connect to your GitHub account if not completed at registration.
12. Once the repo is found, click connect.
13. Navigate to the Settings tab and click on Reveal Config Vars
14. Each variable from the env.py file must be replicated here in key-value pairs and without quotes. (See table below).

| Key | Value |
| --- | --- |
| `DATABASE_URL` | user's own value |
| `IP` | 0.0.0.0 |
| `MONGO_DBNAME` | user's own value |
| `MONGO_URI` | user's own value |
| `PORT` | 5000 |
| `SECRET_KEY` | user's own value |


15. Once all config vars are added, you can now navigate back to the deploy tab and click Enable Automatic Deploys, select the branch to deploy and click Deploy.
16. Once complete, you can click Open App to view the live site.
- NOTE: The live site will now update any time changes are pushed to the connected GitHub repository.

### Fork Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps:

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/donovanainsley/recipe-keeper)
2. At the top of the Repository (not top of page) just below the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Clone Repository

To clone the recipe keeper repository:

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/donovanainsley/recipe-keeper).
2. Click the green "Code" button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
3. Open in the terminal in your code editor.
4. Change the current working directory to the location where you want the cloned directory to be made.
5. Type git clone, and then paste the URL you copied in Step 2.
6. Press enter. Your local clone has now been created.