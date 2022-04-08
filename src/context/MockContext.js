import React from "react";

export const MockContext = React.createContext()

const storyInfo = [
    {
      id: 1,
      name: 'Your Story',
      image: require('../../assets/images/userProfile.png'),
    },
    {
      id: 0,
      name: 'Ram_Charan',
      image: require('../../assets//images/profile1.jpg'),
    },
    {
      id: 0,
      name: 'Tom',
      image: require('../../assets/images/profile2.jpg'),
    },
    {
      id: 0,
      name: 'The_Groot',
      image: require('../../assets/images/profile3.jpg'),
    },
    {
      id: 0,
      name: 'loverland',
      image: require('../../assets/images/profile4.jpg'),
    },
    {
      id: 0,
      name: 'chillhouse',
      image: require('../../assets/images/profile5.jpg'),
    },
  ];

export const MockProvider = ({ children }) => {
    





    return (
        <MockContext.Provider value={{ storyInfo }}>
            {children}
        </MockContext.Provider>
    )
}