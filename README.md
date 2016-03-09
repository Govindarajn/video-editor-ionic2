## VideoEditor: An Ionic 2 App :camera: :video_camera: :scissors:

This is an Ionic 2 app that shows how to use the great [cordova-plugin-video-editor](https://github.com/jbavari/cordova-plugin-video-editor) and [cordova-plugin-instagram-assets-picker](https://github.com/rossmartin/cordova-plugin-instagram-assets-picker) plugins. It allows transcoding a video with every possible setting the video editor plugin provides as well as trimming, creating thumbnails, and getting video info (width, height orientation, duration, size, & bitrate).

![GIF](example.gif)

Watch the video [here](https://youtu.be/WddM6xNlOuA).

1. Install the the latest beta version of the Ionic CLI:
    ```
    npm install -g ionic@beta
    ```

1. Clone this repository
    ```
    git clone https://github.com/rossmartin/video-editor-ionic2
    ```

1. Navigate to the app directory:
    ```
    cd video-editor-ionic2
    ```

1. Install the dependencies
    ```
    npm install
    ```

From here you can build and run the app on different platforms using the traditional Ionic commands (`ionic build ios`, etc.)

I have only tested this app on iOS but it should run fine on Android.  Transcoding videos on Android will be much slower because the video editor plugin uses ffmpeg on Android.  I have had terrible luck with HTML5 videos in the past on Android as well so YMMV there also.
