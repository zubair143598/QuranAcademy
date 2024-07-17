import React, { useState, useRef, useEffect } from "react";

const Meeting = () => {
  const [meetingLink, setMeetingLink] = useState("");
  const jitsiContainerRef = useRef(null);

  const generateMeetingID = () => {
    return 'quran-academy-' + Math.random().toString(36).substr(2, 9);
  };

  const createMeeting = () => {
    const meetingID = generateMeetingID();
    const link = 'https://meet.jit.si/' + meetingID;
    setMeetingLink(link);
  };

  const joinMeeting = () => {
    if (meetingLink) {
      const domain = "meet.jit.si";
      const options = {
        roomName: meetingLink.split('/').pop(),
        parentNode: jitsiContainerRef.current,
        width: '100%',
        height: 700,
      };
      new window.JitsiMeetExternalAPI(domain, options);
    } else {
      alert('Please create a meeting link first.');
    }
  };

  useEffect(() => {
    // Cleanup Jitsi iframe if it exists
    return () => {
      if (jitsiContainerRef.current) {
        jitsiContainerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="pt-28 pb-11 loginForm min-h-screen flex flex-col items-center">
      <section className="meeting">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={createMeeting}
        >
          Create Meeting
        </button>
        <input
          type="text"
          value={meetingLink}
          onChange={(e) => setMeetingLink(e.target.value)}
          placeholder="Meeting link will appear here"
          className="mx-4 p-2 border rounded"
        />
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={joinMeeting}
        >
          Join Meeting
        </button>
      </section>
      <div
        ref={jitsiContainerRef}
        className="mt-8 w-full"
      ></div>
    </div>
  );
};

export default Meeting;
