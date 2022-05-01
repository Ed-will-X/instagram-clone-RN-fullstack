import React from "react";

export const MockContext = React.createContext()

const currentUser = {
    username: 'sherman',
    profilePic: require('../../assets/images/userProfile.png'),
    postImage: require('../../assets/images/post1.jpg'),
    likes: 765,
    isLiked: false,
    caption: 'enjoying the view. enjoying the view enjoying the view enjoying the viewenjoying the view enjoying the viewenjoying the view enjoying the view enjoying the view enjoying the view enjoying the view enjoying the view enjoying the view',
    image: require('../../assets/images/userProfile.png'), // solely for the story
}

const storyInfo = [
    {
      id: 0,
      name: 'ram_Charan',
      image: require('../../assets//images/profile1.jpg'),
    },
    {
      id: 0,
      name: 'tom',
      image: require('../../assets/images/profile2.jpg'),
    },
    {
      id: 0,
      name: 'the_Groot',
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


  const videoData = [
    {
      id: 1,
      video: require('../../assets/videos/video4.mp4'),
      profilePic: require('../../assets/images/post1.jpg'),
      username: 'Ram_Charan',
      caption: 'Feel the buity of nature',
      likes: '245k',
      isLike: false,
      audioImage: require('../../assets/images/post1.jpg'),
      audioName: 'Original Audio',
      audioCreator: 'Ram_Charan'
    },
    {
      id: 2,
      video: require('../../assets/videos/video2.mp4'),
      profilePic: require('../../assets/images/post2.jpg'),
      username: 'The_Groot',
      caption: "It's a tea time",
      likes: '656k',
      isLike: false,
      audioImage: require('../../assets/images/post4.jpg'),
      audioName: 'Original Audio',
      audioCreator: 'The_Groot',
    },
    {
      id: 3,
      video: require('../../assets/videos/video4.mp4'),
      profilePic: require('../../assets/images/post3.jpg'),
      username: 'loverland',
      caption: 'Feel the buity of nature',
      likes: '243k',
      isLike: false,
      audioImage: require('../../assets/images/post4.jpg'),
      audioName: 'Original Audio',
      audioCreator: 'loverland'
    },
    {
      id: 4,
      video: require('../../assets/videos/video2.mp4'),
      profilePic: require('../../assets/images/post4.jpg'),
      username: 'mr. bean',
      caption: 'How cute it is !!',
      likes: '876k',
      isLike: false,
      audioImage: require('../../assets/images/post4.jpg'),
      audioName: 'Ligma',
      audioCreator: 'loverland'
    },
  ];

  const friendsProfileData = [
    {
      username: 'Ram_Charan',
      accountName: 'Ram Charan',
      profileImage: require('../../assets/images/profile4.jpg'),
      posts: 56,
      followers: 6542,
      following: 43,
      follow: false,
    },
    {
      username: 'The_Tom',
      accountName: 'Tom',
      profileImage: require('../../assets/images/profile5.jpg'),
      posts: 24,
      followers: 1253,
      following: 64,
      follow: false,
    },
    {
      username: 'live_long',
      accountName: 'Live Long',
      profileImage: require('../../assets/images/profile2.jpg'),
      posts: 21,
      followers: 7886,
      following: 32,
      follow: false,
    },
    {
      username: 'the_real_hero',
      accountName: 'Ram Charan',
      profileImage: require('../../assets/images/post1.jpg'),
      posts: 123,
      followers: 64253,
      following: 32,
      follow: false,
    },
    {
      username: 'the_jerry',
      accountName: 'The Jerry',
      profileImage: require('../../assets/images/post2.jpg'),
      posts: 56,
      followers: 6542,
      following: 43,
      follow: false,
    },
    {
      username: 'angry_bird',
      accountName: 'Angry Bird',
      profileImage: require('../../assets/images/post3.jpg'),
      posts: 452,
      followers: '564k',
      following: 31,
      follow: false,
    },
    {
      username: 'mr_bean',
      accountName: 'Mr Bean',
      profileImage: require('../../assets/images/post4.jpg'),
      posts: 543,
      followers: '435k',
      following: 22,
      follow: false,
    },
    {
      username: 'the_Jd',
      accountName: 'Mr JD',
      profileImage: require('../../assets/images/post5.jpg'),
      posts: 234,
      followers: '763k',
      following: 332,
      follow: false,
    },
    {
      username: '_don_',
      accountName: 'Don',
      profileImage: require('../../assets/images/post6.jpg'),
      posts: 111,
      followers: 11223,
      following: 1,
      follow: false,
    },
    {
      username: 'black_white',
      accountName: 'blackWhite',
      profileImage: require('../../assets/images/post7.jpg'),
      posts: 121,
      followers: 43213,
      following: 21,
      follow: false,
    },
    {
      username: 'iron_man',
      accountName: 'Iron Man',
      profileImage: require('../../assets/images/post8.jpg'),
      posts: 432,
      followers: '987k',
      following: 24,
      follow: false,
    },
    {
      username: 'funny_videos',
      accountName: 'Funny Video Official',
      profileImage: require('../../assets/images/post9.jpg'),
      posts: '1.2k',
      followers: '1.2M',
      following: 12,
      follow: false,
    },
    {
      username: 'mr_jhon',
      accountName: 'Mr Jhony',
      profileImage: require('../../assets/images/post10.jpg'),
      posts: 533,
      followers: 64322,
      following: 123,
      follow: false,
    },
  ];
  
  const youMightKnow = [
    {
        username: '_don_',
        accountName: 'Don',
        profileImage: require('../../assets/images/post6.jpg'),
        posts: 111,
        followers: 11223,
        following: 1,
        follow: false,
        timestampString: '7w'
      },
      {
        username: 'black_white',
        accountName: 'blackWhite',
        profileImage: require('../../assets/images/post7.jpg'),
        posts: 121,
        followers: 43213,
        following: 21,
        follow: false,
        timestampString: '5w',
      },
      {
        username: 'iron_man',
        accountName: 'Iron Man',
        profileImage: require('../../assets/images/post8.jpg'),
        posts: 432,
        followers: '987k',
        following: 24,
        follow: false,
        timestampString: '6w'
      },
  ]

export const MockProvider = ({ children }) => {
    
    
    return (
        <MockContext.Provider value={{ storyInfo, postInfo, searchData, videoData, friendsProfileData, currentUser, youMightKnow }}>
            {children}
        </MockContext.Provider>
    )
}