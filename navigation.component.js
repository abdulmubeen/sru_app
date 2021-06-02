import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { LoginScreen } from "./src/screens/loginScreen";
import { StudentDashboard } from "./src/screens/studentDashboard";
import { FacultyDashboard } from "./src/screens/facultyDashboard";
import { ParentDashboard } from "./src/screens/parentDashboard";
import { DepartmentDashboard } from "./src/screens/departmentDashboard";
import { AboutScreen } from "./src/screens/aboutScreen";

import { StudentCMSScreen } from "./src/screens/studentScreens/studentCMS";
import { StudentNotesScreen } from "./src/screens/studentScreens/studentNotes";
import { StudentEventsScreen } from "./src/screens/studentScreens/studentEvents";
import { StudentPredictionScreen } from "./src/screens/studentScreens/studentPrediction";
import { StudentTimetableScreen } from "./src/screens/studentScreens/studentTimetable";

import { FacultyCMSScreen } from "./src/screens/facultyScreens/facultyCMS";
import { FacultyCMSIScreen } from "./src/screens/facultyScreens/facultyCMS_1";
import { FacultyScheduleScreen } from "./src/screens/facultyScreens/facultySchedule";
import { FacultySearchStudentScreen } from "./src/screens/facultyScreens/studentDetails";
import { FacultySearchStudentScreen1 } from "./src/screens/facultyScreens/studentDetails1";

import { ParentChildDetailsScreen } from "./src/screens/parentScreens/childDetails";
import { ParentChildTTScreen } from "./src/screens/parentScreens/childTimetable";
import { ParentFacultyDetailsScreen } from "./src/screens/parentScreens/facultyDetails";

import { DepartmentSetScheduleScreen } from "./src/screens/departmentScreens/setSchedule";
import { DepartmentStudentPredictionScreen } from "./src/screens/departmentScreens/studentPP";

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode="none" screenOptions={{ animationEnabled: false }}>
    <Screen name="Login" component={LoginScreen} />
    <Screen name="About" component={AboutScreen} />
    <Screen name="Student_Dash" component={StudentDashboard} />
    <Screen name="Faculty_Dash" component={FacultyDashboard} />
    <Screen name="Parent_Dash" component={ParentDashboard} />
    <Screen name="Department_Dash" component={DepartmentDashboard} />
    <Screen name="Student_CMS" component={StudentCMSScreen} />
    <Screen name="Student_Notes" component={StudentNotesScreen} />
    <Screen name="Student_Events" component={StudentEventsScreen} />
    <Screen name="Student_Prediction" component={StudentPredictionScreen} />
    <Screen name="Student_TimeTable" component={StudentTimetableScreen} />
    <Screen name="Faculty_CMS" component={FacultyCMSScreen} />
    <Screen name="Faculty_CMS_1" component={FacultyCMSIScreen} />
    <Screen name="Faculty_Schedule" component={FacultyScheduleScreen} />
    <Screen
      name="Faculty_Student_Search"
      component={FacultySearchStudentScreen}
    />
    <Screen
      name="Faculty_Student_Search1"
      component={FacultySearchStudentScreen1}
    />
    <Screen name="Parent_Faculty_Info" component={ParentFacultyDetailsScreen} />
    <Screen name="Parent_Child_Info" component={ParentChildDetailsScreen} />
    <Screen name="Parent_Time_Table_Info" component={ParentChildTTScreen} />
    <Screen
      name="Department_Set_Schedule"
      component={DepartmentSetScheduleScreen}
    />
    <Screen
      name="Department_Student_Prediction"
      component={DepartmentStudentPredictionScreen}
    />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
