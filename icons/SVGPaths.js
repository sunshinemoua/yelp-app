import uuid from "react-native-uuid";
import SearchScreen from "../components/screens/SearchScreen";
import ProjectsScreen from "../components/screens/ProjectsScreen";
import ProfileScreen from "../components/screens/ProfileScreen";
import CollectionsScreen from "../components/screens/CollectionsScreen";
import MoreScreen from "../components/screens/MoreScreen";

export const paths = [
  {
    id: uuid.v4(),
    title: "Search",
    icon: "m21.853 20.355-3.444-3.443a9.428 9.428 0 1 0-16.761-6.171 9.428 9.428 0 0 0 15.348 7.586l3.443 3.442a1 1 0 1 0 1.414-1.414ZM5.82 16.245a7.429 7.429 0 1 1 5.253 2.175 7.38 7.38 0 0 1-5.253-2.176Z",
    additionalIcon: "",
    componentScreen: SearchScreen,
  },
  {
    id: uuid.v4(),
    title: "Projects",
    icon: "M13.073 22.521a1.002 1.002 0 0 1-1-1v-1.744H3.518c-1.103 0-2-.897-2-2V3.447c0-1.103.897-2 2-2H8.83c.787 0 1.508.471 1.827 1.185l.962 1.588h9.844a1 1 0 0 1 1 1v6.195c0 .033-.002.066-.005.1v6.262c0 1.103-.898 2-2 2h-3.417l-3.366 2.542a.997.997 0 0 1-.603.203ZM3.518 9.483v8.294h9.555a1 1 0 0 1 1 1v.737l2.032-1.534a.997.997 0 0 1 .602-.203h3.752V9.483H3.518Zm0-2h16.946V6.22h-9.407c-.35 0-.674-.183-.856-.482L8.91 3.605a1.092 1.092 0 0 1-.078-.159H3.518v4.037Z",
    additionalIcon:
      "M7.384 13.805a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm4.607 0a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm4.607 0a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z",
    componentScreen: ProjectsScreen,
  },

  {
    id: uuid.v4(),
    title: "Me",
    icon: "M12 1a11 11 0 1 0 11 11A11.012 11.012 0 0 0 12 1Zm0 2a8.985 8.985 0 0 1 7.791 13.485 14.142 14.142 0 0 0-3.056-1.47 5.286 5.286 0 0 0 .622-2.452V10.57a5.357 5.357 0 1 0-10.714 0v1.993a5.29 5.29 0 0 0 .62 2.45 14.125 14.125 0 0 0-3.054 1.474A8.985 8.985 0 0 1 12 3Zm-3.357 9.563V10.57a3.357 3.357 0 0 1 6.714 0v1.993a3.358 3.358 0 1 1-6.714 0ZM12 21a8.968 8.968 0 0 1-6.604-2.906 12.19 12.19 0 0 1 3.227-1.406 5.241 5.241 0 0 0 6.758-.003c1.137.31 2.223.785 3.224 1.408A8.969 8.969 0 0 1 12 21Z",
    additionalIcon: "",
    componentScreen: ProfileScreen,
  },
  {
    id: uuid.v4(),
    title: "Collections",
    icon: "M19 22a.994.994 0 0 1-.581-.186L12 17.229l-6.419 4.585A1 1 0 0 1 4 21V5a3.003 3.003 0 0 1 3-3h10a3.003 3.003 0 0 1 3 3v16a1 1 0 0 1-1 1Zm-7-7c.208 0 .412.065.581.187L18 19.056V5a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v14.057l5.419-3.87A.998.998 0 0 1 12 15Z",
    additionalIcon: "",
    componentScreen: CollectionsScreen,
  },
  {
    id: uuid.v4(),
    title: "More",
    icon: "M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",
    additionalIcon: "",
    componentScreen: MoreScreen,
  },
  // {
  //   id: uuid.v4(),
  //   title: "",
  //   icon: "",
  //   additionalIcon: "",
  // },
  // {
  //   id: uuid.v4(),
  //   title: "",
  //   icon: "",
  //   additionalIcon: "",
  // },
  // {
  //   id: uuid.v4(),
  //   title: "",
  //   icon: "",
  //   additionalIcon: "",
  // },
];
