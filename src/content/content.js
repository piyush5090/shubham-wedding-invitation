/**
 * ─── BILINGUAL CONTENT ──────────────────────────────────────────────────────
 * ALL user-facing strings live here. Components import { useContent } and
 * read content[lang].section.key — no hardcoded strings in JSX.
 *
 * Hindi uses natural, culturally appropriate wording — not machine translation.
 */

const content = {
  en: {
    meta: {
      title: 'Shubham weds Parul — 20 November 2026',
      description:
        'With the blessings of our families, we joyfully invite you to the wedding celebration of Shubham Sharma & Parul Sharma on 20 November 2026 at Swarnabhoomi, Aligarh.',
    },

    curtain: {
      blessing: 'With the blessings of our families',
      invite: 'We joyfully invite you to the wedding of',
      brideGroom: 'Shubham & Parul',
      date: '20 · November · 2026',
      cta: 'Open Invitation',
      ctaSub: 'Tap to begin',
    },

    hero: {
      saveTheDate: 'Save the Date',
      names: 'Shubham & Parul',
      date: '20 & 21 November 2026 · Aligarh',
      guestGreeting: (name) => `Dear ${name},`,
      defaultGreeting: 'You are warmly invited',
    },

    blessings: {
      ganesh: '॥ Shri Ganeshaya Namah ॥',
      shlok:
        'Vakratunda Mahakaya Suryakoti Samaprabha |\nNirvighnam Kurume Deva Sarva Karyeshu Sarvada ॥',
      vishnu:
        'Mangalam Bhagwan Vishnu, Mangalam Garudadhwaja |\nMangalam Pundarikaaksha, Mangalaya Tano Hari ॥',
      invite:
        'By the grace of the Almighty and the blessings of our elders, a joyous occasion has come to our family.',
      sectionLabel: 'INVITATION FROM: MRS. & MR. SUDHIR KUMAR SHARMA',
      residence: 'H.No. 5, Gali No. 1, Prem Nagar Colony, Near Manoj Steel, Banna Devi, Aligarh',
      contactNumbers: '9456404490, 9412733977, 8532954590, 9999751920',
      heading: 'The Groom & Bride',

      groom: {
        label: 'GROOM',
        name: 'Er. Shubham Sharma',
        grandparentsLabel: 'Grandson of',
        grandparents: 'Smt. Satyawati Devi & Late Mr. Harnarayan Sharma',
        parentsLabel: 'Son of',
        parents: 'Mrs. & Mr. Sudhir Kumar Sharma',
        city: 'Aligarh',
        grandsonOf: 'Grandson of: Smt. Satyawati Devi & Late Mr. Harnarayan Sharma',
        sonOf: 'Son of: Mrs. & Mr. Sudhir Kumar Sharma (Aligarh)',
        alt: 'Shubham Sharma, the groom',
      },

      bride: {
        label: 'BRIDE',
        name: 'Er. Parul Sharma',
        parentsLabel: 'Daughter of',
        parents: 'Smt. Renu Sharma & Mr. Kamal Kant Sharma',
        grandparentsLabel: 'Granddaughter of',
        grandparents: 'Late Smt. Prema Sharma & Mr. Charan Singh Sharma',
        city: 'Ujjain',
        daughterOf: 'Daughter of: Smt. Renu Sharma & Mr. Kamal Kant Sharma',
        granddaughterOf: 'Granddaughter of: Late Smt. Prema Sharma & Mr. Charan Singh Sharma (Ujjain)',
        alt: 'Parul Sharma, the bride',
      },

      closing:
        'We humbly request the honour of your presence and blessings on this auspicious occasion.',
    },

    weddingCelebrations: {
      eyebrow: '20TH NOV 2026 · SHAADI',
      title: 'The Wedding Celebrations',
      dateBanner: 'Friday, 20 November 2026',
      intro:
        'Join us as two families unite in sacred celebration at Swarnbhoomi, filled with Vedic rituals, music, joy, and a feast.',
      footerLine: 'WARMLY WELCOMING YOU AT SWARNBHOOMI, ALIGARH',
      threeTitle: 'CEREMONY 3D SHOWCASE',
      threeHint: 'Interactive 3D · move cursor or tap to interact with the stage',
      threeAlt: 'Interactive 3D representation of wedding ceremonies',
      events: [
        {
          id: 'ghudchadi',
          threeId: 'ghudchadi',
          badge: 'ROYAL PROCESSION',
          title: 'Ghudchadi',
          time: '12:00 PM (Noon)',
          note: "The celebratory groom's horse procession with family celebrations, traditional music, and joyful blessings.",
          ariaLabel: 'Event 1: Ghudchadi, 12:00 PM',
        },
        {
          id: 'lagan-sagai',
          threeId: 'lagan-sagai',
          badge: 'SACRED UNION',
          title: 'Lagan Sagai',
          time: '2:00 PM (Afternoon)',
          note: 'The auspicious lagan rituals, engagement rings exchange, and divine union of both families.',
          ariaLabel: 'Event 2: Lagan Sagai, 2:00 PM',
        },
        {
          id: 'dinner',
          threeId: 'dinner',
          badge: 'FESTIVE FEAST',
          title: 'Dinner (Swaruchi Bhoj)',
          time: '6:00 PM onwards',
          note: 'Bless the newlywed couple and partake in a sumptuous celebratory wedding feast with family and friends.',
          ariaLabel: 'Event 3: Dinner, 6:00 PM onwards',
        },
      ],
      venue: {
        label: 'WEDDING VENUE',
        name: 'Swarnbhoomi',
        address: '7th milestone, Near khareswar mandir, khair road, Aligarh, Uttar Pradesh 202140',
        mapQuery: 'Swarnbhoomi 7th milestone Near khareswar mandir khair road Aligarh Uttar Pradesh 202140',
        mapsBtn: 'View Venue Map',
        calendarBtn: 'Add to Calendar',
      },
      dotLabels: [
        'Ghudchadi (Royal Horse & Golden Aura)',
        'Lagan Sagai (Interlocking Gold Rings)',
        'Dinner (Golden Kalash & Floral Petals)',
      ],
    },

    reception: {
      eyebrow: '21ST NOV 2026 · RECEPTION',
      title: 'The Wedding Reception',
      date: 'Saturday, 21 November 2026',
      badge: 'GRAND BLESSINGS & DINNER',
      time: '4:00 PM onwards',
      description:
        'Mrs. & Mr. Sudhir Kumar Sharma cordially invite you to an auspicious evening of congratulations, joy, and fine dining to bless the newlywed couple.',
      calendarBtn: 'Add Reception to Calendar',
      mapsBtn: 'View Mangal Dham Map',
      venueLabel: 'RECEPTION VENUE',
      venueName: 'Mangal Dham',
      venueAddress: 'Mangal Vihar Colony, Kamakhaya Mandir Road, Bannadevi, Aligarh',
      threeTitle: 'RECEPTION CELESTIAL STAGE',
      threeHint: 'Interactive 3D · drag or move cursor to orbit celestial starlight',
      threeAlt: 'Interactive 3D scene of Reception celebration',
      footerLine: 'WITH LOVE, RESPECT & BLESSINGS',
    },

    countdown: {
      heading: 'Counting Down to Forever',
      days: 'Days',
      hours: 'Hours',
      minutes: 'Minutes',
      seconds: 'Seconds',
      past: 'The celebration has begun!',
    },

    welcome: {
      eyebrow: 'ATITHI DEVO BHAVA · CORDIAL INVITATION',
      heading: 'You Are Warmly Welcome',
      subheading: 'Awaiting your gracious presence with folded hands & open hearts',
      quote: '“Atithi Devo Bhava” — A guest is the living embodiment of the Divine.',
      message:
        'Your presence and heartfelt blessings are the most cherished gift for us as we embark upon this sacred journey. With open arms and joyous hearts, the Sharma family cordially welcomes you to grace the wedding & reception celebrations of Shubham & Parul.',
      hostsTitle: 'Invitation Extended By',
      invitationFrom: 'Mrs. & Mr. Sudhir Kumar Sharma',
      residenceLabel: 'Residence',
      residenceAddress: 'H.No. 5, Gali No. 1, Prem Nagar Colony, Near Manoj Steel, Banna Devi, Aligarh',
      contactLabel: 'Helpline & Contact Numbers',
      contacts: ['9456404490', '9412733977', '8532954590', '9999751920'],
      hostsGroomLabel: "Groom's Family",
      hostsGroom: 'Mrs. & Mr. Sudhir Kumar Sharma (Aligarh)',
      hostsBrideLabel: "Bride's Family",
      hostsBride: 'Smt. Renu Sharma & Mr. Kamal Kant Sharma (Ujjain)',
      hostsAll: 'All Sharma Family, Relatives & Well-wishers',
      venue1Title: '20th Nov: Shaadi Venue',
      venue1Name: 'Swarnbhoomi',
      venue1Address: '7th milestone, Near khareswar mandir, khair road, Aligarh, Uttar Pradesh 202140',
      venue2Title: '21st Nov: Reception Venue',
      venue2Name: 'Mangal Dham',
      venue2Address: 'Mangal Vihar Colony, Kamakhaya Mandir Road, Bannadevi, Aligarh',
      mapButton: 'Get Directions',
      callButton: 'Call Host',
      threeTitle: 'SWAGATAM · SACRED WELCOME',
      threeHint: 'Interactive 3D • Move cursor or tap to sway the sacred kalash',
    },

    rsvp: {
      heading: 'Send Your Blessings',
      subheading: 'Bless the couple with your love and visit',
      nameLabel: 'Your Name / Family Name',
      messageLabel: 'Your Blessings & Wishes',
      whatsappBtn: 'Send Blessings via WhatsApp',
      callBtn: 'Call Us',
      placeholderName: 'e.g. Sharma Family',
      placeholderMessage: 'Wishing Shubham & Parul a lifetime of endless joy, love and harmony...',
      whatsappMessage: (name, message) =>
        `Namaste 🙏\nHeartiest congratulations to Shubham & Parul! 🌸\n\n"${message || 'Wishing you both a joyful and blessed married life!'}"\n\nWith love and blessings,\n*${name}*`,
    },

    footer: {
      blessing: 'शुभ विवाह 🌸',
      tagline: 'May love, laughter and happily ever after fill your days.',
      hashtag: '#ShubhamWedParul',
      madeWith: 'Made with ❤️ for Shubham & Parul',
      replayIntro: 'Replay Intro',
      language: 'हिन्दी में देखें',
    },

    music: {
      play: 'Play Music',
      pause: 'Pause Music',
      notAvailable: 'Music coming soon',
    },
  },

  // ─── HINDI ────────────────────────────────────────────────────────────────
  hi: {
    meta: {
      title: 'शुभम & पारुल का शुभ विवाह — 20 नवम्बर 2026',
      description:
        'परिवार के आशीर्वाद से हम आपको शुभम शर्मा एवं पारुल शर्मा के मंगल परिणयोत्सव में सादर आमंत्रित करते हैं। दिनांक 20 नवम्बर 2026, स्वर्णभूमि, अलीगढ़।',
    },

    curtain: {
      blessing: 'परिवार के आशीर्वाद से',
      invite: 'हम सादर आमंत्रित करते हैं',
      brideGroom: 'शुभम एवं पारुल',
      date: '20 · नवम्बर · 2026',
      cta: 'निमंत्रण खोलें',
      ctaSub: 'स्पर्श करें',
    },

    hero: {
      saveTheDate: 'शुभ तिथि',
      names: 'शुभम & पारुल',
      date: '20 एवं 21 नवम्बर 2026 · अलीगढ़',
      guestGreeting: (name) => `आदरणीय ${name},`,
      defaultGreeting: 'आप सादर आमंत्रित हैं',
    },

    blessings: {
      ganesh: '॥ श्री गणेशाय नम: ॥',
      shlok:
        'वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ: ।\nनिर्विघ्नं कुरुमेदेव सर्व कार्येषु सर्वदा ॥',
      vishnu:
        'मंगलम् भगवान विष्णु: मंगलम् गरुड़ध्वज: ।\nमंगलम् पुण्डरीकाक्ष: मंगलाय तनो5 हरि: ॥',
      invite:
        'स्नेहिल स्वजन, परमपिता परमेश्वर की असीम अनुकम्पा व आशीर्वाद से हमारे परिवार में शुभ परिणयोत्सव का पावन अवसर आया है।',
      sectionLabel: 'दर्शनाभिलाषी / प्रेषक: श्रीमती एवं श्री सुधीर कुमार शर्मा',
      residence: 'मकान नं. 5, गली नं. 1, प्रेम नगर कॉलोनी, मनोज स्टील के पास, बन्नादेवी, अलीगढ़',
      contactNumbers: '9456404490, 9412733977, 8532954590, 9999751920',
      heading: 'वर एवं वधू परिचय',

      groom: {
        label: 'वर',
        name: 'Er. शुभम शर्मा',
        grandparentsLabel: 'पौत्र',
        grandparents: 'श्रीमती सत्यवती देवी एवं स्व. श्री हरनारायण शर्मा',
        parentsLabel: 'सुपुत्र',
        parents: 'श्रीमती एवं श्री सुधीर कुमार शर्मा',
        city: 'अलीगढ़',
        grandsonOf: 'पौत्र: श्रीमती सत्यवती देवी एवं स्व. श्री हरनारायण शर्मा',
        sonOf: 'सुपुत्र: श्रीमती एवं श्री सुधीर कुमार शर्मा (अलीगढ़)',
        alt: 'शुभम शर्मा, वर',
      },

      bride: {
        label: 'वधू',
        name: 'Er. पारुल शर्मा',
        parentsLabel: 'सुपुत्री',
        parents: 'श्रीमती रेनू शर्मा एवं श्री कमलकांत शर्मा',
        grandparentsLabel: 'पौत्री',
        grandparents: 'स्व. श्रीमती प्रेमा शर्मा एवं श्री चरणसिंह शर्मा',
        city: 'उज्जैन',
        daughterOf: 'सुपुत्री: श्रीमती रेनू शर्मा एवं श्री कमलकांत शर्मा',
        granddaughterOf: 'पौत्री: स्व. श्रीमती प्रेमा शर्मा एवं श्री चरणसिंह शर्मा (उज्जैन)',
        alt: 'पारुल शर्मा, वधू',
      },

      closing:
        'इस पावन मांगलिक अवसर पर आपकी गरिमामयी उपस्थिति एवं स्नेहिल आशीर्वाद की विनम्र अभिलाषा है।',
    },

    weddingCelebrations: {
      eyebrow: '20 नवम्बर 2026 · शुभ विवाह',
      title: 'विवाह समारोह',
      dateBanner: 'दि. 20 नवम्बर 2026, शुक्रवार',
      intro:
        'स्वर्णभूमि में दो परिवारों के मिलन एवं वैदिक परिणय संस्कार के इस पावन अवसर पर आप सपरिवार सादर आमंत्रित हैं।',
      footerLine: 'स्वर्णभूमि, अलीगढ़ में आपका हार्दिक स्वागत है',
      threeTitle: 'शुभ मंगल वेदी (3D)',
      threeHint: 'इंटरैक्टिव 3D · देखने के लिए कर्सर घुमाएँ या टैप करें',
      threeAlt: 'विवाह समारोहों का 3D प्रदर्शन',
      events: [
        {
          id: 'ghudchadi',
          threeId: 'ghudchadi',
          badge: 'शुभ घुड़चढ़ी',
          title: 'घुड़चढ़ी',
          time: 'दोपहर 12:00 बजे',
          note: 'उमंग, उत्साह, मंगल गीतों एवं परिजनों के उल्लासपूर्ण नृत्य के साथ दूल्हे की शुभ घुड़चढ़ी।',
          ariaLabel: 'कार्यक्रम 1: घुड़चढ़ी, दोपहर 12:00 बजे',
        },
        {
          id: 'lagan-sagai',
          threeId: 'lagan-sagai',
          badge: 'पावन बंधन',
          title: 'लग्न एवं सगाई',
          time: 'दोपहर 02:00 बजे',
          note: 'सगाई की पावन रस्म, वलय विनिमय एवं दोनों परिवारों के मिलन का वैदिक लग्न अनुष्ठान।',
          ariaLabel: 'कार्यक्रम 2: लग्न एवं सगाई, दोपहर 02:00 बजे',
        },
        {
          id: 'dinner',
          threeId: 'dinner',
          badge: 'प्रीतिभोज',
          title: 'स्वरुचि भोज',
          time: 'सायं 06:00 बजे से',
          note: 'वर-वधू को शुभ मंगल आशीर्वाद दें एवं स्वादिष्ट स्वरुचिभोज का आनंद लें।',
          ariaLabel: 'कार्यक्रम 3: स्वरुचि भोज, सायं 06:00 बजे से',
        },
      ],
      venue: {
        label: 'विवाह स्थल',
        name: 'स्वर्णभूमि',
        address: '7वाँ मील का पत्थर, खेरेश्वर मंदिर के पास, खैर रोड, अलीगढ़ (उ.प्र.) 202140',
        mapQuery: 'Swarnbhoomi 7th milestone Near khareswar mandir khair road Aligarh Uttar Pradesh 202140',
        mapsBtn: 'वेन्यू मैप देखें',
        calendarBtn: 'कैलेंडर में जोड़ें',
      },
      dotLabels: [
        'घुड़चढ़ी (शाही अश्व एवं मंगल प्रभा)',
        'लग्न एवं सगाई (अंगूठी युगल व हीरे)',
        'स्वरुचि भोज (मंगल कलश व पुष्पवृष्टि)',
      ],
    },

    reception: {
      eyebrow: '21 नवम्बर 2026 · आशीर्वाद एवं प्रतिभोज',
      title: 'विवाह प्रीतिभोज एवं आशीर्वाद',
      date: 'दि. 21 नवम्बर 2026, शनिवार',
      badge: 'आशीर्वाद एवं प्रीतिभोज',
      time: 'सायं 04:00 बजे से',
      description:
        'श्रीमती एवं श्री सुधीर कुमार शर्मा आपको नवदंपति को शुभ आशीष प्रदान करने एवं स्नेहभोज में सम्मिलित होने हेतु सादर आमंत्रित करते हैं।',
      calendarBtn: 'रिसेप्शन कैलेंडर में जोड़ें',
      mapsBtn: 'मंगल धाम मैप देखें',
      venueLabel: 'रिसेप्शन स्थल',
      venueName: 'मंगल धाम',
      venueAddress: 'मंगल विहार कॉलोनी, कामाख्या मंदिर रोड, बन्नादेवी, अलीगढ़',
      threeTitle: 'आशीर्वाद मंच (3D)',
      threeHint: 'इंटरैक्टिव 3D · 3D दृश्य देखने हेतु कर्सर घुमाएँ',
      threeAlt: 'रिसेप्शन उत्सव का 3D प्रदर्शन',
      footerLine: 'सस्नेह व सादर आमंत्रण',
    },

    countdown: {
      heading: 'शुभ मुहूर्त की प्रतीक्षा',
      days: 'दिन',
      hours: 'घंटे',
      minutes: 'मिनट',
      seconds: 'सेकंड',
      past: 'उत्सव आरम्भ हो चुका है!',
    },

    welcome: {
      eyebrow: '॥ अतिथि देवो भवः ॥ · सादर सप्रेम आमंत्रण',
      heading: 'स्वागताकांक्षी',
      subheading: 'आपका हार्दिक व स्नेहिल स्वागत है',
      quote: '“अतिथि देवो भवः” — पधारे हुए अतिथि साक्षात् ईश्वर का रूप होते हैं।',
      message:
        'आपकी गरिमामयी उपस्थिति और पावन आशीर्वाद ही इस मांगलिक प्रसंग की सबसे बड़ी शोभा हैं। अगाध स्नेह, आदर एवं करबद्ध प्रार्थना के साथ शर्मा परिवार शुभम एवं पारुल के विवाह एवं प्रीतिभोज में आपका हार्दिक व आत्मीय स्वागत करता है।',
      hostsTitle: 'दर्शनाभिलाषी / प्रेषक',
      invitationFrom: 'श्रीमती एवं श्री सुधीर कुमार शर्मा',
      residenceLabel: 'निवास स्थान',
      residenceAddress: 'मकान नं. 5, गली नं. 1, प्रेम नगर कॉलोनी, मनोज स्टील के पास, बन्नादेवी, अलीगढ़',
      contactLabel: 'संपर्क सूत्र',
      contacts: ['9456404490', '9412733977', '8532954590', '9999751920'],
      hostsGroomLabel: 'वर पक्ष',
      hostsGroom: 'श्रीमती एवं श्री सुधीर कुमार शर्मा (अलीगढ़)',
      hostsBrideLabel: 'वधू पक्ष',
      hostsBride: 'श्रीमती रेनू शर्मा एवं श्री कमलकांत शर्मा (उज्जैन)',
      hostsAll: 'समस्त शर्मा परिवार, स्वजन एवं मित्रगण',
      venue1Title: '20 नवम्बर: विवाह स्थल',
      venue1Name: 'स्वर्णभूमि',
      venue1Address: '7वाँ मील का पत्थर, खेरेश्वर मंदिर के पास, खैर रोड, अलीगढ़ (उ.प्र.) 202140',
      venue2Title: '21 नवम्बर: रिसेप्शन स्थल',
      venue2Name: 'मंगल धाम',
      venue2Address: 'मंगल विहार कॉलोनी, कामाख्या मंदिर रोड, बन्नादेवी, अलीगढ़',
      mapButton: 'गूगल मैप में देखें',
      callButton: 'फ़ोन करें',
      threeTitle: '॥ शुभ स्वागतम् ॥',
      threeHint: 'इंटरएक्टिव 3D • स्पर्श करें या कर्सर घुमाएँ',
    },

    rsvp: {
      heading: 'शुभकामनाएँ एवं आशीर्वाद',
      subheading: 'वर-वधू को अपने स्नेह और मंगल आशीर्वाद से अभिसिंचित करें',
      nameLabel: 'आपका नाम / परिवार का नाम',
      messageLabel: 'शुभकामना संदेश एवं आशीर्वाद',
      whatsappBtn: 'WhatsApp पर शुभकामनाएँ भेजें',
      callBtn: 'फ़ोन करें',
      placeholderName: 'जैसे: शर्मा परिवार',
      placeholderMessage: 'शुभम एवं पारुल को सुखद वैवाहिक जीवन एवं अनंत खुशियों की हार्दिक मंगलकामनाएँ...',
      whatsappMessage: (name, message) =>
        `नमस्ते 🙏\nशुभम एवं पारुल के शुभ विवाह पर हार्दिक बधाई व मंगलकामनाएँ! 🌸\n\n"${message || 'सदा सुहागन रहो, जीवन में अपार खुशियाँ और प्रेम रहे!'}"\n\nस्नेह और आशीर्वाद सहित,\n*${name}*`,
    },

    footer: {
      blessing: 'शुभ विवाह 🌸',
      tagline: 'प्रेम, हास्य और खुशियों से भरा जीवन मिले आप दोनों को।',
      hashtag: '#ShubhamWedParul',
      madeWith: 'प्यार से बनाया गया — शुभम & पारुल के लिए',
      replayIntro: 'परिचय फिर देखें',
      language: 'View in English',
    },

    music: {
      play: 'संगीत चलाएं',
      pause: 'संगीत रोकें',
      notAvailable: 'संगीत शीघ्र आएगा',
    },
  },
};

export default content;
