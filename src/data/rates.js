// Individual service rates — taken from the Exotic Infotech quotation (all rates in INR, exclusive of GST).
// Rates marked * are indicative and confirmed after a brief.
export const rateCategories = [
  {
    "key": "social",
    "title": "Social Media Management",
    "items": [
      {
        "code": "SM-01",
        "name": "Instagram Account Management",
        "unit": "per account / month",
        "rate": "₹4,000",
        "notes": "Publishing of agreed content (up to 30 feed items and stories), captions, hashtags, comment monitoring and monthly report."
      },
      {
        "code": "SM-02",
        "name": "Facebook Page Management",
        "unit": "per page / month",
        "rate": "₹2,500",
        "notes": "Standalone. ₹1,500 / month when managed alongside Instagram for the same brand."
      },
      {
        "code": "SM-03",
        "name": "LinkedIn Page Management",
        "unit": "per page / month",
        "rate": "₹4,000",
        "notes": "Up to 8 posts / month with LinkedIn-specific copy, company page upkeep and monthly report. Designs billed separately."
      },
      {
        "code": "SM-04",
        "name": "YouTube Channel Management",
        "unit": "per channel / month",
        "rate": "₹4,000",
        "notes": "Up to 8 uploads (long-form or Shorts): titles, descriptions, tags, playlists, end screens. Editing and thumbnails billed separately."
      },
      {
        "code": "SM-05",
        "name": "Social Media Strategy",
        "unit": "one-time, per brand",
        "rate": "₹5,000",
        "notes": "Account audit, competitor scan (up to 3), audience definition, content pillars, tone and posting rhythm. Quarterly refresh: ₹3,000."
      },
      {
        "code": "SM-06",
        "name": "Monthly Content Calendar",
        "unit": "per brand / month",
        "rate": "₹1,500",
        "notes": "Included in platform management. Standalone price applies when only planning is required."
      },
      {
        "code": "SM-07",
        "name": "Content Scheduling & Publishing",
        "unit": "per platform / month",
        "rate": "₹1,500",
        "notes": "Included in platform management. Standalone for client-supplied content; up to 30 items."
      },
      {
        "code": "SM-08",
        "name": "Caption Writing",
        "unit": "per brand / month",
        "rate": "₹1,500",
        "notes": "Included in platform management. Standalone: up to 20 captions in English or Gujarati/Hindi (one language per caption)."
      },
      {
        "code": "SM-09",
        "name": "Hashtag & Keyword Research",
        "unit": "one-time, per brand",
        "rate": "₹1,000",
        "notes": "Hashtag sets by content pillar and local keywords. Monthly refresh included in management."
      },
      {
        "code": "SM-10",
        "name": "Basic Community Management",
        "unit": "per account / month",
        "rate": "₹2,000",
        "notes": "Replies to comments and FAQ-level DMs using a client-approved reply bank, once per working day. Complaints escalated to the client."
      },
      {
        "code": "SM-11",
        "name": "Comment & Message Monitoring",
        "unit": "per account / month",
        "rate": "₹1,000",
        "notes": "Daily monitoring and escalation only; no replies. Included in SM-01."
      },
      {
        "code": "SM-12",
        "name": "Profile Optimisation",
        "unit": "one-time, per platform",
        "rate": "₹1,500",
        "notes": "Bio, category, contact buttons, links, highlight structure and 5 highlight covers."
      },
      {
        "code": "SM-13",
        "name": "Account Improvement & Growth Strategy",
        "unit": "per brand / month",
        "rate": "₹3,000",
        "notes": "Monthly performance review, competitor benchmarking, content adjustment plan and a 30-minute review call."
      },
      {
        "code": "SM-14",
        "name": "Monthly Analytics & Performance Report",
        "unit": "per platform / report",
        "rate": "₹1,000",
        "notes": "Included in platform management. Standalone report with reach, engagement, follower trend, top content and recommendations."
      }
    ]
  },
  {
    "key": "design",
    "title": "Graphic Design & Creative",
    "items": [
      {
        "code": "GD-01",
        "name": "Standard Static Post",
        "unit": "per design",
        "rate": "₹350",
        "notes": "Single-frame social post from brand template; one size."
      },
      {
        "code": "GD-02",
        "name": "Premium Promotional Post",
        "unit": "per design",
        "rate": "₹600",
        "notes": "Custom layout, product cut-outs or retouching, stronger art direction."
      },
      {
        "code": "GD-03",
        "name": "Carousel Design",
        "unit": "per set (up to 5 slides)",
        "rate": "₹800",
        "notes": "Each additional slide: ₹120."
      },
      {
        "code": "GD-04",
        "name": "Instagram Story Design",
        "unit": "per story",
        "rate": "₹200",
        "notes": "Story set of 3 frames: ₹500."
      },
      {
        "code": "GD-05",
        "name": "Festival Creative",
        "unit": "per design",
        "rate": "₹400",
        "notes": "Festival / occasion greeting with brand integration."
      },
      {
        "code": "GD-06",
        "name": "Promotional Banner (digital)",
        "unit": "per design",
        "rate": "₹600",
        "notes": "Website, WhatsApp or social banner; one size. Extra size: ₹150."
      },
      {
        "code": "GD-07",
        "name": "Offer & Discount Creative",
        "unit": "per design",
        "rate": "₹500",
        "notes": "Offer-led layout with pricing, validity and call to action."
      },
      {
        "code": "GD-08",
        "name": "Advertisement Creative",
        "unit": "per set (3 sizes)",
        "rate": "₹900",
        "notes": "One ad concept delivered in 1:1, 4:5 and 9:16 for Meta / Google."
      },
      {
        "code": "GD-09",
        "name": "Business Poster (print)",
        "unit": "per design",
        "rate": "₹900",
        "notes": "A4 / A3 print-ready file with bleed. Printing not included."
      },
      {
        "code": "GD-10",
        "name": "Thumbnail Design",
        "unit": "per design",
        "rate": "₹250",
        "notes": "Blog, web or social video thumbnail."
      },
      {
        "code": "GD-11",
        "name": "YouTube Thumbnail",
        "unit": "per design",
        "rate": "₹300",
        "notes": "1280×720, cut-out and title treatment."
      },
      {
        "code": "GD-12",
        "name": "Logo Design",
        "unit": "per project",
        "rate": "₹4,000",
        "notes": "3 initial concepts, 2 revision rounds on the chosen concept, final files (AI, PDF, PNG, SVG)."
      },
      {
        "code": "GD-13",
        "name": "Brand Identity Kit",
        "unit": "per project",
        "rate": "₹7,500",
        "notes": "Logo usage sheet, colour palette, typography, 6 social templates, highlight covers, letterhead and visiting card layout."
      },
      {
        "code": "GD-14",
        "name": "Brochure Design",
        "unit": "tri-fold or 4 pages",
        "rate": "₹2,000",
        "notes": "Print-ready. Each additional page: ₹450. Content and photos supplied or produced separately."
      },
      {
        "code": "GD-15",
        "name": "Visiting Card",
        "unit": "per design (2 sides)",
        "rate": "₹700",
        "notes": "Print-ready with bleed."
      },
      {
        "code": "GD-16",
        "name": "Menu Design",
        "unit": "per page / panel",
        "rate": "₹800",
        "notes": "Restaurant / café menu; later price updates at ₹150 per page."
      },
      {
        "code": "GD-17",
        "name": "Standee Design",
        "unit": "per design",
        "rate": "₹1,000",
        "notes": "Roll-up or standee, print-ready at actual size."
      },
      {
        "code": "GD-18",
        "name": "Flex Banner Design",
        "unit": "per design",
        "rate": "₹800",
        "notes": "Any size; print-ready."
      },
      {
        "code": "GD-19",
        "name": "Pamphlet / Flyer Design",
        "unit": "per design",
        "rate": "₹1,200",
        "notes": "Double-sided A4 / A5. Single-sided: ₹700."
      },
      {
        "code": "GD-20",
        "name": "Presentation Design",
        "unit": "per slide (min. 10)",
        "rate": "₹250",
        "notes": "Company or sales deck in PowerPoint / Google Slides from supplied content."
      },
      {
        "code": "GD-21",
        "name": "Motion Graphics",
        "unit": "per video",
        "rate": "₹1,500 – ₹2,500",
        "notes": "Animated post up to 15 sec: ₹1,500. Motion explainer up to 30 sec: ₹2,500. Longer pieces quoted."
      }
    ]
  },
  {
    "key": "video",
    "title": "Video Production & Editing",
    "items": [
      {
        "code": "VE-01",
        "name": "Basic Reel Editing",
        "unit": "per reel",
        "rate": "₹400",
        "notes": "Up to 30 sec. Cuts, music, text overlays and burned-in captions."
      },
      {
        "code": "VE-02",
        "name": "Professional Reel Editing",
        "unit": "per reel",
        "rate": "₹750",
        "notes": "Up to 60 sec. Hook structure, motion text, transitions, colour correction, sound design, subtitles."
      },
      {
        "code": "VE-03",
        "name": "Influencer Video Editing",
        "unit": "per video",
        "rate": "₹600",
        "notes": "Creator-shot footage up to 60 sec, edited to brand guidelines."
      },
      {
        "code": "VE-04",
        "name": "Long-form Video Editing",
        "unit": "per video (up to 5 min)",
        "rate": "₹2,500",
        "notes": "YouTube / interview / webinar edits. Each additional finished minute: ₹300."
      },
      {
        "code": "VS-01",
        "name": "Reel Shooting + Editing",
        "unit": "per reel",
        "rate": "₹1,200",
        "notes": "Shot at client location in a batch session (minimum 4 reels per visit, up to 2 hours). Professional editing included."
      },
      {
        "code": "VS-02",
        "name": "Promotional Reel",
        "unit": "per reel",
        "rate": "₹1,800",
        "notes": "Scripted offer / launch reel with on-screen talent direction. Talent fees at actuals."
      },
      {
        "code": "VS-03",
        "name": "Product Showcase Reel",
        "unit": "per reel",
        "rate": "₹1,600",
        "notes": "Tabletop or in-store product reel with lighting setup; up to 3 products per reel."
      },
      {
        "code": "VS-04",
        "name": "Customer Testimonial Video",
        "unit": "per video",
        "rate": "₹2,000",
        "notes": "1–2 min, interview setup with lapel microphone, subtitles. Up to 2 testimonials per visit."
      },
      {
        "code": "VS-05",
        "name": "Interview Video",
        "unit": "per video",
        "rate": "₹4,500",
        "notes": "Up to 5 min finished, 2-camera setup where possible, lapel audio, lower thirds."
      },
      {
        "code": "VS-06",
        "name": "Business Promotional Video",
        "unit": "per video",
        "rate": "₹6,000",
        "notes": "60–90 sec scripted brand video, one location, up to 3 hours of shooting."
      },
      {
        "code": "VS-07",
        "name": "On-location Shooting (footage only)",
        "unit": "per 2-hour session",
        "rate": "₹2,500",
        "notes": "Content shooter on site; selected raw clips delivered. No editing."
      },
      {
        "code": "VS-08",
        "name": "Product Videography",
        "unit": "per session (up to 10 products)",
        "rate": "₹3,500",
        "notes": "Studio-style product footage with lighting; graded clips delivered."
      },
      {
        "code": "VS-09",
        "name": "Half-day Shoot",
        "unit": "up to 4 hours",
        "rate": "₹5,000",
        "notes": "One shooter, photo or video, within service area. Editing billed per deliverable."
      },
      {
        "code": "VS-10",
        "name": "Full-day Shoot",
        "unit": "up to 8 hours",
        "rate": "₹8,500",
        "notes": "One shooter, photo or video, within service area. Editing billed per deliverable."
      },
      {
        "code": "VS-11",
        "name": "Monthly Content Shoot",
        "unit": "per session (up to 4 hours)",
        "rate": "₹10,000",
        "notes": "Batch shoot delivering 8 edited reels and 15 edited photos for the month."
      },
      {
        "code": "VS-12",
        "name": "Additional Crew Member",
        "unit": "per half-day",
        "rate": "₹2,500",
        "notes": "Second shooter, assistant or audio operator."
      },
      {
        "code": "VP-01",
        "name": "Cinematic Reel",
        "unit": "per reel",
        "rate": "₹2,500",
        "notes": "Up to 45 sec. Shot list, gimbal / cinema moves, colour grading, sound design."
      },
      {
        "code": "VP-02",
        "name": "Corporate Video",
        "unit": "per video",
        "rate": "From ₹15,000*",
        "notes": "2–3 min scripted film, 1 shoot day, 2 revision rounds. Voice-over, actors and locations at actuals."
      },
      {
        "code": "VP-03",
        "name": "Event Coverage (video)",
        "unit": "half-day / full-day",
        "rate": "₹6,000 / ₹10,000",
        "notes": "Includes one 60–90 sec highlight reel. Additional reels from the same event: ₹750 each."
      }
    ]
  },
  {
    "key": "photo",
    "title": "Photography & Production",
    "items": [
      {
        "code": "PH-01",
        "name": "Product Photography",
        "unit": "per session (up to 12 products)",
        "rate": "₹2,500",
        "notes": "2 angles per product, background clean-up. Additional product: ₹150."
      },
      {
        "code": "PH-02",
        "name": "Food Photography",
        "unit": "per session (up to 15 dishes)",
        "rate": "₹2,500",
        "notes": "Styled with the client's kitchen team. Props and food costs at actuals."
      },
      {
        "code": "PH-03",
        "name": "Gym / Fitness Photography",
        "unit": "per session (up to 3 hours)",
        "rate": "₹3,500",
        "notes": "Facility, equipment, trainers and members (with consent); 30 edited images."
      },
      {
        "code": "PH-04",
        "name": "Business Photography",
        "unit": "per session",
        "rate": "₹3,500",
        "notes": "Office, team and portraits (up to 10 people); 30 edited images."
      },
      {
        "code": "PH-05",
        "name": "Interior Photography",
        "unit": "per session",
        "rate": "₹4,000",
        "notes": "Up to 15 edited images with bracketed exposures for interiors."
      },
      {
        "code": "PH-06",
        "name": "Event Photography",
        "unit": "half-day / full-day",
        "rate": "₹5,000 / ₹8,500",
        "notes": "Edited selection of 80–150 images depending on duration."
      },
      {
        "code": "PH-07",
        "name": "Lifestyle Photography",
        "unit": "per session",
        "rate": "₹4,500",
        "notes": "Concept-led shoot with talent; model fees and locations at actuals."
      },
      {
        "code": "PH-08",
        "name": "Professional Videography",
        "unit": "per 2-hour session",
        "rate": "₹3,500",
        "notes": "Mirrorless camera, gimbal, lights and audio; graded clips delivered. Editing billed per deliverable."
      },
      {
        "code": "PH-09",
        "name": "Brand Shoot",
        "unit": "half-day (photo + video)",
        "rate": "₹9,000",
        "notes": "Styled shoot with a monthly shot list; 40 edited photos plus footage for up to 6 reels (reel editing billed separately)."
      },
      {
        "code": "PH-10",
        "name": "Campaign Shoot",
        "unit": "full-day, crew of 2",
        "rate": "From ₹16,000*",
        "notes": "Concept-led campaign shoot, photo + video. Confirmed after creative brief."
      }
    ]
  },
  {
    "key": "drone",
    "title": "Drone Photography & Videography",
    "items": [
      {
        "code": "DR-01",
        "name": "Basic Drone Shoot",
        "unit": "per session",
        "rate": "₹2,000",
        "notes": "Up to 45 min flying at one location; selected raw clips and 10 aerial photos."
      },
      {
        "code": "DR-02",
        "name": "Professional Aerial Video",
        "unit": "per session",
        "rate": "₹3,500",
        "notes": "Planned shot list, up to 1.5 hours on site; colour-graded clips."
      },
      {
        "code": "DR-03",
        "name": "Cinematic Drone Shoot",
        "unit": "per session",
        "rate": "₹6,500",
        "notes": "Scripted moves at golden hour, 4K, graded and edited 30–60 sec film."
      },
      {
        "code": "DR-04",
        "name": "Business / Property Aerial Shoot",
        "unit": "per property",
        "rate": "₹4,000",
        "notes": "Exteriors and surroundings; 15 edited aerial photos and graded clips."
      },
      {
        "code": "DR-05",
        "name": "Drone Shoot with Video Editing",
        "unit": "per session",
        "rate": "₹3,000",
        "notes": "Basic drone shoot plus one edited 30–45 sec aerial reel."
      },
      {
        "code": "DR-06",
        "name": "Event Drone Coverage",
        "unit": "up to 4 hours",
        "rate": "₹7,000",
        "notes": "Aerial coverage plus a 60 sec aerial highlight edit."
      },
      {
        "code": "DR-07",
        "name": "Half-day Drone Coverage",
        "unit": "up to 4 hours on site",
        "rate": "₹6,000",
        "notes": "Footage delivered as selected, graded clips."
      },
      {
        "code": "DR-08",
        "name": "Full-day Drone Coverage",
        "unit": "up to 8 hours on site",
        "rate": "₹10,000",
        "notes": "Footage delivered as selected, graded clips."
      }
    ]
  },
  {
    "key": "gbp",
    "title": "Google Business Profile",
    "items": [
      {
        "code": "GB-01",
        "name": "New Account Setup",
        "unit": "one-time, per location",
        "rate": "₹1,200",
        "notes": "Profile creation, categories, hours, services and 10 photos."
      },
      {
        "code": "GB-02",
        "name": "Verification Assistance",
        "unit": "one-time, per location",
        "rate": "₹800",
        "notes": "Guidance through Google's verification steps. Approval and timing are decided by Google."
      },
      {
        "code": "GB-03",
        "name": "Complete Profile Optimisation",
        "unit": "one-time, per location",
        "rate": "₹1,800",
        "notes": "Categories, services / products, description, attributes, Q&A, photo set and tracked website link."
      },
      {
        "code": "GB-04",
        "name": "Business Information Updates",
        "unit": "per update batch",
        "rate": "₹300",
        "notes": "Hours, contact, holiday timings. Included in monthly management."
      },
      {
        "code": "GB-05",
        "name": "Photo & Video Uploads",
        "unit": "per month",
        "rate": "Included",
        "notes": "Up to 12 photos and 2 videos per month within GB-11, from supplied or shoot content."
      },
      {
        "code": "GB-06",
        "name": "Weekly Business Posts",
        "unit": "per month (4 posts)",
        "rate": "₹1,200",
        "notes": "Designed update posts. Included in GB-11."
      },
      {
        "code": "GB-07",
        "name": "Offer & Festival Updates",
        "unit": "per update",
        "rate": "₹200",
        "notes": "Up to 4 per month included in GB-11."
      },
      {
        "code": "GB-08",
        "name": "Review Monitoring",
        "unit": "per location / month",
        "rate": "₹500",
        "notes": "Weekly review checks and alerts. Included in GB-11."
      },
      {
        "code": "GB-09",
        "name": "Review Response Support",
        "unit": "per location / month",
        "rate": "₹1,000",
        "notes": "Drafted replies to all new reviews (up to 40 / month) using approved tone. Included in GB-11."
      },
      {
        "code": "GB-10",
        "name": "Local SEO Optimisation",
        "unit": "per location / month",
        "rate": "₹2,500",
        "notes": "On-profile keyword work, consistent listings on up to 10 directories per month, review-request QR kit, monthly local visibility check."
      },
      {
        "code": "GB-11",
        "name": "Monthly Profile Management",
        "unit": "per location / month",
        "rate": "₹2,200",
        "notes": "GB-04 to GB-09 combined with a monthly insights report."
      },
      {
        "code": "GB-12",
        "name": "Multi-location / Branch Management",
        "unit": "per additional location / month",
        "rate": "₹1,800",
        "notes": "From the second location onwards. 5 or more locations quoted on scope."
      }
    ]
  },
  {
    "key": "meta",
    "title": "Meta Ads",
    "items": [
      {
        "code": "MA-01",
        "name": "Meta Business Manager Setup",
        "unit": "one-time, per brand",
        "rate": "₹1,000",
        "notes": "Business portfolio, Page and Instagram linking, access and roles."
      },
      {
        "code": "MA-02",
        "name": "Ad Account Setup",
        "unit": "one-time, per brand",
        "rate": "₹500",
        "notes": "Ad account, payment method guidance (client pays Meta directly), billing and permissions."
      },
      {
        "code": "MA-03",
        "name": "Pixel / Tracking Setup",
        "unit": "one-time, per website",
        "rate": "₹2,000",
        "notes": "Meta Pixel and standard events where a website exists. Website access required; Conversions API quoted separately."
      },
      {
        "code": "MA-04",
        "name": "Campaign Strategy & Launch Build",
        "unit": "one-time, per brand",
        "rate": "₹2,500",
        "notes": "Objective mapping, audience research, campaign structure, ad copy and first launch."
      },
      {
        "code": "MA-05",
        "name": "Additional Campaign Build",
        "unit": "per new campaign",
        "rate": "₹1,000",
        "notes": "A new campaign added after launch (new objective, offer or audience)."
      },
      {
        "code": "MA-10",
        "name": "Ad spend up to ₹25,000 / month",
        "unit": "per brand / month",
        "rate": "₹3,500",
        "notes": "Up to 2 active campaigns."
      },
      {
        "code": "MA-11",
        "name": "Ad spend ₹25,001 – ₹75,000 / month",
        "unit": "per brand / month",
        "rate": "₹6,000",
        "notes": "Up to 4 active campaigns."
      },
      {
        "code": "MA-12",
        "name": "Ad spend ₹75,001 – ₹1,50,000 / month",
        "unit": "per brand / month",
        "rate": "₹9,000",
        "notes": "Up to 6 active campaigns."
      },
      {
        "code": "MA-13",
        "name": "Ad spend above ₹1,50,000 / month",
        "unit": "per brand / month",
        "rate": "7% of ad spend",
        "notes": "Campaign count agreed on scope."
      }
    ]
  },
  {
    "key": "google",
    "title": "Google Ads",
    "items": [
      {
        "code": "GA-01",
        "name": "Google Ads Account Setup",
        "unit": "one-time, per brand",
        "rate": "₹1,500",
        "notes": "Account, billing guidance (client pays Google directly), linking with Google Analytics 4 and Business Profile."
      },
      {
        "code": "GA-02",
        "name": "Conversion Tracking Setup",
        "unit": "one-time, per website",
        "rate": "₹2,500",
        "notes": "Google tag / GA4 conversions for calls, forms and WhatsApp clicks. Website access required."
      },
      {
        "code": "GA-03",
        "name": "Keyword Research & Search Ads Build",
        "unit": "per campaign",
        "rate": "₹2,500",
        "notes": "Keyword research, negative keywords, ad groups, responsive search ads and assets."
      },
      {
        "code": "GA-04",
        "name": "Display Ads Build",
        "unit": "per campaign",
        "rate": "₹2,000",
        "notes": "Audience and placement setup. Banner creatives billed separately (GD-08)."
      },
      {
        "code": "GA-05",
        "name": "YouTube Ads Build",
        "unit": "per campaign",
        "rate": "₹2,000",
        "notes": "Video campaign setup. Video creative billed separately."
      },
      {
        "code": "GA-06",
        "name": "Call Ads Build",
        "unit": "per campaign",
        "rate": "₹1,500",
        "notes": "Call-focused ads with call tracking where available."
      },
      {
        "code": "GA-07",
        "name": "Performance Max / Local Campaign Build",
        "unit": "per campaign",
        "rate": "₹3,000",
        "notes": "Local goals run through Performance Max or location-targeted Search. Needs image, video and text assets."
      },
      {
        "code": "GA-08",
        "name": "Lead Generation Campaign Build",
        "unit": "per campaign",
        "rate": "₹2,500",
        "notes": "Search or Performance Max with lead form assets or landing-page conversions."
      },
      {
        "code": "GA-10",
        "name": "Ad spend up to ₹25,000 / month",
        "unit": "per brand / month",
        "rate": "₹4,000",
        "notes": "Up to 2 active campaigns."
      },
      {
        "code": "GA-11",
        "name": "Ad spend ₹25,001 – ₹75,000 / month",
        "unit": "per brand / month",
        "rate": "₹7,000",
        "notes": "Up to 4 active campaigns."
      },
      {
        "code": "GA-12",
        "name": "Ad spend ₹75,001 – ₹1,50,000 / month",
        "unit": "per brand / month",
        "rate": "₹10,000",
        "notes": "Up to 6 active campaigns."
      },
      {
        "code": "GA-13",
        "name": "Ad spend above ₹1,50,000 / month",
        "unit": "per brand / month",
        "rate": "8% of ad spend",
        "notes": "Campaign count agreed on scope."
      }
    ]
  },
  {
    "key": "influencer",
    "title": "Influencer Marketing",
    "items": [
      {
        "code": "IN-01",
        "name": "Local Influencer Research",
        "unit": "per campaign brief",
        "rate": "₹1,500",
        "notes": "Long-list of local creators matched to the brief and city."
      },
      {
        "code": "IN-02",
        "name": "Influencer Shortlisting",
        "unit": "per campaign brief",
        "rate": "Included in IN-01",
        "notes": "Up to 10 profiles with followers, engagement, audience location and past brand work."
      },
      {
        "code": "IN-03",
        "name": "Influencer Outreach",
        "unit": "per confirmed creator",
        "rate": "₹1,000",
        "notes": "Contact, availability and rate collection. Covers IN-04 for the same creator."
      },
      {
        "code": "IN-04",
        "name": "Influencer Negotiation",
        "unit": "per confirmed creator",
        "rate": "Included in IN-03",
        "notes": "Fee, deliverables, timelines and usage terms agreed in writing."
      },
      {
        "code": "IN-05",
        "name": "Influencer Campaign Planning",
        "unit": "per campaign",
        "rate": "₹1,500",
        "notes": "Creator brief, key messages, do's and don'ts, posting schedule and approval flow."
      },
      {
        "code": "IN-06",
        "name": "Influencer Shoot Coordination",
        "unit": "per visit (up to 2 hours)",
        "rate": "₹1,200",
        "notes": "On-site coordination of the creator's visit at the client's venue."
      },
      {
        "code": "IN-07",
        "name": "Influencer Reel Collaboration",
        "unit": "per collaboration",
        "rate": "₹1,000",
        "notes": "Collab-post setup, script check and posting coordination. Creator fee extra."
      },
      {
        "code": "IN-08",
        "name": "Instagram Page Collaboration",
        "unit": "per page",
        "rate": "₹800",
        "notes": "Placement on local / city pages; page fee extra at actuals."
      },
      {
        "code": "IN-09",
        "name": "Brand Collaboration",
        "unit": "per collaboration",
        "rate": "₹2,000",
        "notes": "Brand-to-brand cross-promotion: partner search, proposal and joint content plan."
      },
      {
        "code": "IN-10",
        "name": "Campaign Execution",
        "unit": "per campaign (up to 3 creators)",
        "rate": "₹4,000",
        "notes": "End-to-end management of IN-05 to IN-07 and IN-11. Each additional creator: ₹1,000."
      },
      {
        "code": "IN-11",
        "name": "Influencer Performance Reporting",
        "unit": "per campaign",
        "rate": "₹800",
        "notes": "Collated creator insights (reach, views, engagement, link clicks where shared). Included in IN-10."
      }
    ]
  },
  {
    "key": "extras",
    "title": "Extras for Any Package",
    "items": [
      {
        "code": "AD-01",
        "name": "Extra Reel",
        "unit": "per reel",
        "rate": "₹400 / ₹1,200 / ₹2,500",
        "notes": "Basic edit / shoot + edit in an existing session / cinematic."
      },
      {
        "code": "AD-02",
        "name": "Extra Poster",
        "unit": "per design",
        "rate": "₹350 / ₹600",
        "notes": "Standard / premium."
      },
      {
        "code": "AD-03",
        "name": "Extra Carousel",
        "unit": "per set (up to 5 slides)",
        "rate": "₹800",
        "notes": "Additional slide: ₹120."
      },
      {
        "code": "AD-04",
        "name": "Extra Story",
        "unit": "per story",
        "rate": "₹200",
        "notes": "Story set of 3: ₹500."
      },
      {
        "code": "AD-05",
        "name": "Additional Shoot Session",
        "unit": "per 2-hour session",
        "rate": "₹2,500",
        "notes": "Within the service area. Editing billed per deliverable."
      },
      {
        "code": "AD-06",
        "name": "Extra Drone Shoot",
        "unit": "per session",
        "rate": "₹2,000",
        "notes": "Basic drone shoot (DR-01); higher formats from the drone rates."
      },
      {
        "code": "AD-07",
        "name": "Extra Photography Session",
        "unit": "per session",
        "rate": "₹2,500",
        "notes": "Product, food or business photography (standard session)."
      },
      {
        "code": "AD-08",
        "name": "Additional Influencer Collaboration",
        "unit": "per creator",
        "rate": "₹1,000",
        "notes": "Coordination only; creator fee at actuals."
      },
      {
        "code": "AD-09",
        "name": "Festival Campaign",
        "unit": "per campaign",
        "rate": "₹3,500",
        "notes": "Teaser, offer reveal, reel, story and reminder: 3 festival posts, 1 shot reel, 3 stories, planning."
      },
      {
        "code": "AD-10",
        "name": "Special Promotional Campaign",
        "unit": "per campaign (7– 14 days)",
        "rate": "₹7,500",
        "notes": "4 premium creatives, 2 shot reels, 6 stories and campaign plan. Ad management and spend separate."
      },
      {
        "code": "AD-11",
        "name": "Additional Social Media Platform",
        "unit": "per platform / month",
        "rate": "₹2,500",
        "notes": "Adapting and publishing existing package content. Native LinkedIn / YouTube management at ₹4,000."
      },
      {
        "code": "AD-12",
        "name": "Extra Revision",
        "unit": "per round",
        "rate": "₹150 / ₹300",
        "notes": "Design / video, beyond the included rounds. A change of brief after approval is a new item."
      },
      {
        "code": "AD-13",
        "name": "Urgent Delivery",
        "unit": "per item",
        "rate": "+30% of item rate",
        "notes": "24-hour designs, 48-hour reel edits, subject to team capacity on the day."
      },
      {
        "code": "AD-14",
        "name": "Additional Location / Branch",
        "unit": "per location / month",
        "rate": "₹1,800",
        "notes": "Google Business Profile management for each extra branch; branch content quoted."
      }
    ]
  }
];
