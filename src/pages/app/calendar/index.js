import React from "react";
import TaskSideBar from "./TaskSideBar/index";
import TasksList from "./TasksList";
import TaskDetail from "./TaskDetail";
import PropTypes from "prop-types";
// import { useIntl } from "react-intl";
import AppsContainer from "../../../medify/components/AppsContainer";
import { useParams } from "react-router-dom";
import CalendarContextProvider from "../context/CalendarContextProvider";
import AppPageMeta from "../../../medify/components/AppPageMeta";
const ToDo = () => {
  const { id } = useParams();

  //  const { messages } = //;

  const onGetMainComponent = () => {
    if (id) {
      return <TaskDetail />;
    } else {
      return <TasksList />;
    }
  };
  // title={messages["todo.todoApp"]}
  return (
    <CalendarContextProvider>
      <AppsContainer sidebarContent={<TaskSideBar />}>
        <AppPageMeta title="Calendar App" />
        {onGetMainComponent()}
      </AppsContainer>
    </CalendarContextProvider>
  );
};

export default ToDo;

ToDo.propTypes = {
  match: PropTypes.object,
};
