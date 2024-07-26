import { React, useState, useEffect, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HashLoader from "react-spinners/HashLoader";
import './PageLinks.css'

//Soham Zadafiya
// const Contest_main = lazy(() => import("./Components/Contest/Contest_main.js"))
import Contest_main from './Components/Contest/Contest_main.js';

//Kaushal Danani
// const Sign_in_page = lazy(() => import("./Components/SignIn/Sign_in_page.js"))
import Sign_in_page from './Components/SignIn/Sign_in_page.js';
// const Sign_up_first_page = lazy(() => import("./Components/SignIn/Sign_up_first_page.js"))
import Sign_up_first_page from './Components/SignIn/Sign_up_first_page.js';
import Sign_up_second_page from './Components/SignIn/Sign_up_second_page.js';
import Project_Collaboration from './Components/ProjectCollaboration/Project_Collaboration.js';
import AddProjectCollaboration from './Components/ProjectCollaboration/AddProjectCollaboration.js';
import NotFoundPage from './Components/PageNotFound/NotFoundPage.js';

// jay fanse
import LoginHomePage from './Components/HomeAfterLogin/LoginHomePage.js';
import ArticlesNewsHomePage from './Components/ArticleAndNews/ArticlesNewsHomePage.js';
import EditUserProfile from './Components/EditUserProfile/EditUserProfile.js';
import ResourcesContent from './Components/ResourcesContent/ResourcesContent.js';
import UserProfile from './Components/UserProfile/UserProfile.js';


// jay prajapati
import ResourcesHome from './Components/SubjectResources/ResourcesHome.js';
import Discussion_Forums from './Components/Discussion/Discussion_Forums.js';
import Question_data from './Components/DiscussionDetails/Question_data.js';
import ProjectMain from './Components/ProjectComponent/ProjectMain.js';



import ManageAdmins from './Components/HomeAfterLogin/ManageAdmins.js';
import Ask_Question from './Components/QuestionAnswer/Ask_Question.js';
import Give_answer from './Components/QuestionAnswer/Give_answer.js';
import AddContest from './Components/Contest/AddContest.js';
import Home_page_before_login from './Components/HomeBeforeLogin/Javascript/Home_page_before_login.js';
import AddSubject from './Components/SubjectResources/AddSubject.js';
import AddBooks from './Components/ResourcesContent/AddBooks.js';
import AddVideos from './Components/ResourcesContent/AddVideos.js';
import AddNotes from './Components/ResourcesContent/AddNotes.js';


import useUser from './store/userContext.js';
import AddProject from './Components/ProjectComponent/AddProject.js';
const PageLinks = () => {

    const [isLoading, setIsLoading] = useState(false);
    const { user, setUser } = useUser();
    const userCradential = async () => {
        try {
            setIsLoading(true);
            const response = await fetch("http://localhost:5000/user/home/dataset", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            });
            const data = await response.json();
            if(data.message == undefined)
                setUser(data.userData);
                // console.log('-----------------------------USER-------------------------', data);
            else 
                setUser(null);
            
            setIsLoading(false);
            
        }
        catch (err) {
            console.error(err, err.response);
        }
    
    }

    useEffect(() => {
        userCradential();
            
    }, [])

    if (isLoading)
        return <>
            <div className='loadingPage'>
            <HashLoader
                color={'#ffffff'}
                loading={isLoading}
                // cssOverride={override}
                size={70}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
            </div>
        </>

    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Home_page_before_login />} />
                    <Route path='/home' element={<LoginHomePage />} />
                    <Route path='/signin' element={<Sign_in_page />} />
                    <Route path='/signup/step-1' element={<Sign_up_first_page />} />
                    <Route path='/signup/step-2' element={<Sign_up_second_page />} />
                    <Route path='/manageAdmins' element={<ManageAdmins />} />
                    <Route path='/contest' element={<Contest_main />} />
                    <Route path='/addContest' element={<AddContest />} />
                    {/* <Route path='/article&news' element={<ArticlesNewsHomePage />} /> */}
                    <Route path='/resources' element={<ResourcesHome />} />
                    <Route path='/resources/rescontent' element={<ResourcesContent />} />
                    <Route path='/resources/rescontent/addBook' element={<AddBooks/>} />
                    <Route path='/resources/rescontent/addVideo' element={<AddVideos/>} />
                    <Route path='/resources/rescontent/addNote' element={<AddNotes/>} />
                    <Route path='/addSubject' element={<AddSubject />} />

                    <Route path='/discussion' element={<Discussion_Forums />} />
                    <Route path='/discussion/addQuestion' element={<Ask_Question />} />
                    <Route path='/discussion/question' element={<Question_data />} />
                    <Route path='/discussion/question/addReply' element={<Give_answer />} />
                    <Route path='/project_collab' element={<Project_Collaboration />} />
                    <Route path='/project_collab/addpost' element={<AddProjectCollaboration />} />
                    <Route path='/project' element={<ProjectMain />} />
                    <Route path='/project/add_project' element={<AddProject />} />
                    <Route path='/profile' element={<UserProfile />} />
                    <Route path='/profile/edit_profile' element={<EditUserProfile />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
            </Router>
        </>
    )
}

export default PageLinks