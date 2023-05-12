import React from "react";

export default function index() {
  return (
    <>
      <div
        style={{
          backgroundImage:
            "url('https://assets3.thrillist.com/v1/image/2855008/1584x1054/scale;webp=auto;jpeg_quality=60;progressive.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "99.5vw",
          marginLeft: "-10%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.35)",
            boxShadow: "rgba(0, 0, 0, 0.25) 5px 5px 25px",
            width: "100%",
            borderRadius: "20px",
            height: "100%",
          }}
        >
          <h1
            style={{
              color: "white",
            }}
          >
            What is &nbsp;
            <span
              style={{
                color: "#afffb8",
              }}
            >
              Memo Tunisia ?
            </span>
          </h1>
          <h2
            style={{
              color: "white",
              textAlign: "center",
            }}
          >
            Memo Tunisia is a website that allows you to share your memories
            with the world <br />
            and know more about the best places in Tunisia.
          </h2>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          marginTop: "50px",
        }}
      >
        <div
          style={{
            width: "27%",
            minWidth: "300px",
            height: "300px",
            display: "flex",
            flexDirection: "column",
            boxShadow: "rgba(0, 0, 0, 0.25) 5px 5px 25px",
            margin: "20px",
          }}
        >
          <img
            style={{
              height: "180px",
              objectFit: "cover",
            }}
            src="https://tabaani.co/images/becomeAhost/soug.jpg"
            alt=""
          />
          <h4
            style={{
              color: "black",
              textAlign: "center",
              marginTop: "40px",
            }}
          >
            Share the story behind famous landmarks in your city.
          </h4>
        </div>
        <div
          style={{
            width: "27%",
            minWidth: "300px",

            height: "300px",
            display: "flex",
            flexDirection: "column",
            boxShadow: "10px 10px 10px 0px rgba(0,0,0,0.25)",
            margin: "20px",
          }}
        >
          <img
            style={{
              height: "180px",
              objectFit: "cover",
            }}
            src="https://tabaani.co/images/becomeAhost/Tunisia-Tour-Culinary-Experience-Eating-with-host-family.jpg"
            alt=""
          />
          <h4
            style={{
              color: "black",
              textAlign: "center",
              marginTop: "40px",
            }}
          >
            Food tour, cooking class, dining experience, and more.
          </h4>
        </div>
        <div
          style={{
            width: "27%",
            height: "300px",
            minWidth: "300px",

            display: "flex",
            flexDirection: "column",
            boxShadow: "10px 10px 10px 0px rgba(0,0,0,0.25)",
            margin: "20px",
          }}
        >
          <img
            style={{
              height: "180px",
              objectFit: "cover",
            }}
            src="https://tabaani.co/images/becomeAhost/Zaghouan-Hike.jpg"
            alt=""
          />
          <h4
            style={{
              color: "black",
              textAlign: "center",
              marginTop: "40px",
            }}
          >
            Lead nature hikes, water sports, mountain activities, and more.
          </h4>
        </div>
      </div>
    </>
  );
}
