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

  const postInfo = [
    {
      username: 'mr sherman',
      profilePic: require('../../assets/images/userProfile.png'),
      postImage: require('../../assets/images/post1.jpg'),
      likes: 765,
      isLiked: false,
      caption: 'enjoying the view. enjoying the view enjoying the view enjoying the viewenjoying the view enjoying the viewenjoying the view enjoying the view enjoying the view enjoying the view enjoying the view enjoying the view enjoying the view'
    },
    {
      username: 'chillhouse',
      profilePic: require('../../assets/images/profile5.jpg'),
      postImage: require('../../assets/images/post2.jpg'),
      likes: 345,
      isLiked: false,
      caption: "nice bird"
    },
    {
      username: 'Tom',
      profilePic: require('../../assets/images/profile4.jpg'),
      postImage: require('../../assets/images/post3.jpg'),
      likes: 734,
      isLiked: false,
      caption: "happy birthday son"
    },
    {
      username: 'The_Groot',
      profilePic: require('../../assets/images/profile3.jpg'),
      postImage: require('../../assets/images/post4.jpg'),
      likes: 875,
      isLiked: false,
      caption: ''
    },
  ];

  const searchData = [
    {
      id: 0,
      images: [
        require('../../assets/images/post1.jpg'),
        require('../../assets/images/post2.jpg'),
        require('../../assets/images/post3.jpg'),
        require('../../assets/images/post4.jpg'),
        require('../../assets/images/post5.jpg'),
        require('../../assets/images/post6.jpg'),
      ],
    },
    {
      id: 1,
      images: [
        require('../../assets/images/post7.jpg'),
        require('../../assets/images/post8.jpg'),
        require('../../assets/images/post9.jpg'),
        require('../../assets/images/post10.jpg'),
        require('../../assets/images/post11.jpg'),
        require('../../assets/images/post12.jpg'),
      ],
    },
    {
      id: 2,
      images: [
        require('../../assets/images/post13.jpg'),
        require('../../assets/images/post14.jpg'),
        require('../../assets/images/post15.jpg'),
      ],
    },
  ];

export const MockProvider = ({ children }) => {
    
    
    return (
        <MockContext.Provider value={{ storyInfo, postInfo, searchData }}>
            {children}
        </MockContext.Provider>
    )
}