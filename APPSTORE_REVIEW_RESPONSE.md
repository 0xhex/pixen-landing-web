# App Store Review Response - Face Data Usage (Guideline 2.1)

## Response to Apple App Store Review Team

**Date:** November 15, 2025  
**App Name:** Pixen AI  
**Guideline Reference:** 2.1 - Information Needed (Face Data)

---

## Executive Summary

Pixen AI is committed to user privacy and security. We understand the sensitivity of face data and have implemented strict protocols to ensure user data is protected. **We do not store face data on our servers or share it with any third-party services.**

---

## Detailed Responses to Apple's Questions

### 1. What face data does the app collect?

**Answer:**

When users upload photos to create AI-generated images and videos, our app temporarily processes facial features from these photos. Specifically, we process:

- Facial landmarks and features (eyes, nose, mouth, face shape)
- Facial positioning and orientation data
- Facial characteristics needed for AI image generation

This data is extracted from user-uploaded photos solely for the purpose of generating personalized AI content using our templates.

---

### 2. Provide a complete and clear explanation of all planned uses of the collected face data

**Answer:**

Face data is used **exclusively** for the following purposes:

**Primary Use: AI Image and Video Generation**
- Users upload their photos to generate AI-powered images and videos using various creative templates
- The facial features are temporarily processed in memory to apply the user's likeness to the selected AI template
- This processing happens in real-time during the generation request

**Technical Process:**
1. User uploads photo through the app
2. Facial data is extracted and processed in temporary memory
3. AI generation applies the facial features to the selected template
4. Generated image/video is returned to the user
5. Facial data is immediately deleted from memory

**We do NOT use face data for:**
- User identification or authentication
- Tracking or profiling
- Advertising or marketing
- Training AI models (beyond the immediate generation request)
- Any purpose other than the user's explicit generation request

---

### 3. Will the face data be shared with any third parties? Where will this information be stored?

**Answer:**

**Third-Party Sharing: NO**

- Face data is **NOT shared with any third-party services**
- All facial processing occurs within our own secure, isolated infrastructure
- We do not use external face recognition APIs or services
- We do not sell, rent, or transfer face data to any third parties

**Storage Location: NOT STORED**

- Face data is **NOT stored on our servers**
- Face data is **NOT stored on third-party cloud services**
- Processing occurs entirely in temporary memory (RAM) during the active generation session
- Once the AI generation is complete (typically seconds to minutes), the face data is immediately and permanently deleted from memory
- We maintain **zero persistent storage** of facial biometric data

**What IS Stored:**
- User account information (email, username)
- Generated images/videos (the final output, not the original photos with face data)
- Usage statistics (anonymized, no personal data)

---

### 4. How long will face data be retained?

**Answer:**

**Retention Period: Zero / Immediate Deletion**

- Face data retention: **0 seconds** after generation completion
- Face data exists only during the active AI generation process (temporary memory only)
- Typical processing time: 10 seconds to 2 minutes
- Upon completion of generation, face data is immediately and automatically purged from memory
- No archival, backup, or long-term storage of face data occurs
- Original photos uploaded by users are never stored on our servers

**Timeline:**
```
User uploads photo → Face data extracted to RAM → AI generation (10s-2min) → Result delivered → Face data deleted
                                                                                    ↑
                                                                            (Happens immediately)
```

---

### 5. Where in the privacy policy is the app's collection, use, disclosure, sharing, and retention of face data explained?

**Answer:**

Face data handling is comprehensively explained in our Privacy Policy at the following locations:

**Section 2.2: Face Data Collection and Processing**
- Location: Privacy Policy > Section 2 (Information We Collect) > Subsection 2.2
- This section provides detailed information about:
  - What face data we collect
  - How face data is used
  - Confirmation that we DO NOT store face data
  - Confirmation of NO third-party sharing
  - Data retention policy (immediate deletion)
  - User control and rights

**Section 4.1: Service Providers (Information Sharing)**
- Location: Privacy Policy > Section 4 (Information Sharing and Disclosure) > Subsection 4.1
- This section explicitly states:
  - Photos and face data are NEVER shared with third parties
  - All facial processing occurs within our secure infrastructure
  - Clarification that while we use some third-party services, face data is NOT among the shared information

**Section 9: Data Retention**
- Location: Privacy Policy > Section 9 (Data Retention)
- This section reinforces:
  - Zero retention period for facial biometric data
  - Temporary processing in memory only
  - Immediate deletion after generation completion

**Privacy Policy URL:** 
- Web: https://www.pixen-ai.com/privacy
- Accessible in-app through Settings > Privacy Policy

---

### 6. Quote the specific text from the privacy policy concerning face data

**Answer:**

**Direct Quote from Section 2.2:**

> "**Face Data Collection and Processing**
> 
> **Important Information About Face Data:**
> 
> - **What Face Data We Collect:** When you upload photos containing facial features, our App processes facial data to generate AI-powered images and videos using our templates.
> 
> - **How Face Data Is Used:** Face data is used exclusively for the purpose of generating personalized AI images and videos. The processing occurs temporarily in memory during the generation process.
> 
> - **We Do NOT Store Face Data:** Your photos containing face data are processed for AI image generation only and are NOT stored on our servers. Once the AI generation is complete, the facial data is immediately discarded from our systems.
> 
> - **No Third-Party Sharing:** We do not share, sell, or transfer your face data to any third-party services. All facial processing occurs within our secure, isolated processing environment.
> 
> - **Data Retention:** Face data is retained only for the duration of the active generation process (typically seconds to minutes) and is automatically deleted immediately after generation completion. We maintain zero permanent storage of facial biometric data.
> 
> - **User Control:** You have complete control over what photos you upload. You can delete your generated images at any time through the App, and your original photos are never stored on our servers."

**Direct Quote from Section 4.1:**

> "**Important:** Your photos and face data are NEVER shared with third-party service providers. All facial recognition and processing occurs within our own secure infrastructure without external transmission."

**Direct Quote from Section 9:**

> "**Face Data Retention:** As stated in Section 2.2, face data and photos containing facial features are NOT stored on our servers. They are processed temporarily in memory only during the active AI generation process and are immediately and permanently deleted upon completion. There is zero retention period for facial biometric data."

---

## Additional Security Measures

To further demonstrate our commitment to user privacy:

1. **Encryption in Transit:** All data transmission uses TLS 1.3 encryption
2. **Memory-Only Processing:** Face data never touches disk storage
3. **Automatic Purging:** Automated systems ensure face data removal after each generation
4. **No Logging:** Face data is not logged in any system logs or debugging tools
5. **User Consent:** Clear in-app disclosure before users upload photos
6. **Transparency:** Privacy policy is easily accessible and written in clear language

---

## Contact Information

For any additional questions or clarifications regarding our face data handling:

- **Email:** help@pixen-ai.com
- **WhatsApp:** +40 762 953437
- **Privacy Policy:** https://www.pixen-ai.com/privacy

---

We believe our app fully complies with Apple's App Store guidelines regarding face data handling. We are committed to protecting user privacy and welcome any additional questions or requests for clarification.

Thank you for your review.

**Pixen AI Development Team**

