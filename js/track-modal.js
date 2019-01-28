
!function(a) {  
  var n = [
    {
      id: "ai",
      title: "virtual reality",
      body:
        "an artificial environment that is created with software and presented to the user in such a way that the user suspends belief and accepts it as a real environment. On a computer, virtual reality is primarily experienced through two of the five senses: sight and sound.",
      img: "img/track-ai.png"
    },
    {
      id: "blockchain",
      title: "augmented reality",
      body: ` integration of digital information with the user's environment in real time.written in special 3D programs that allow the developer to tie animation or contextual digital information in the computer program to an augmented reality "marker" in the real world.`,
      img: "img/track-blockchain.png"
    },
    {
      id: "iot",
      title: "Internet of Things",
      body:
        "A world of devices connected by internet opens up opportunities for us that were previously unthinkable. Innovative apps can be built that can allow devices to share data and take intelligent decisions.",
      img: "img/track-iot.png"
    },
    {
      id: "algorithm",
      title: "artificial intelligence",
      body:
        "From bots, to personal assistants, and shopping automation, what the future holds for artificial intelligence can be described for sure with at least one word; Exciting. Our machines and devices are getting faster, more efficient and slowly learning to do things on their own.",
      img: "img/track-algorithm.png"
    },
    {
      id: "fintech",
      title: "FinTech",
      body:
        "The financial services industry is facing a wave of digital disruption that is starting to reshape the sector. This industry is currently the second-biggest target for disruption, after health care.",
      img: "img/track-fintech.png"
    },
    {
      id: "future-mobility",
      title: "Big data and analytics",
      body:
        "Big data analytics is the often complex process of examining large and varied data sets -- or big data -- to uncover information including hidden patterns, unknown correlations, market trends and customer preferences that can help organizations make informed business decisions.",
      img: "img/track-future-mobility.png"
    },
    {
      id: "healthtech",
      title: "Mobile app development",
      body:
        "With the exploding popularity of smartphones and tablets, mobile application development is becoming a more and more popular medium of software creation. It is software intended to utilize the unique features and hardware of mobile devices.",
      img: "img/track-healthtech.png"
    },
    {
      id: "ml",
      title: "Website development",
      body:
        "coding or programming that enables website functionality, per the owner's requirements. It mainly deals with the non-design aspect of building websites, which includes coding and writing markup.",
      img: "img/track-ml.png"
    },
    {
      id: "ar-vr",
      title: "Sponsor Domain",
      body:
        "VR and AR is the extension of our minds, and is meant for those interested in building immersive, engaging experiences for real industry applications. From fashion and sports to data visualisation and engineering to education and healthcare, every sector will be impacted by the rise of VR & AR.",
      img: "img/track-ar-vr.png"
    }
  ];
  function o(e) {
    var t = a("#trackModal");
    t.find(".modal-title").text(e.title),
      t.find(".modal-body").text(e.body),
      t.find(".track-img").css("background", 'url("' + e.img + '")'),
      t.data("id", e.id);
  }
  a("#trackModal").on("show.bs.modal", function(e) {
    var t = a(e.relatedTarget).data("track");
    o(
      n.filter(function(e) {
        return e.id === t;
      })[0]
    );
  }),
    a("#nextTrack").on("click", function() {
      var e,
        t,
        i = a("#trackModal").data("id");
      o(
        n[
          ((e = i),
          (t = n
            .map(function(e) {
              return e.id;
            })
            .indexOf(e)),
          t === n.length - 1 ? 0 : t + 1)
        ]
      );
    });
};
(jQuery);
