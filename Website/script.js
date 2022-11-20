const myData = {
    "name": "Name: My Info",
    "nickname": "Nickname: Info",
    "email": "Email: contact.hutotpn@gmail.com",
    "phoneNumber": "Phone number: +9999 123-456-789",
    "age": "Age: " + 15,
    "twitterHandle": "Twitter: @Twitter",
    "youtubeHandle": "YouTube: @YouTube",
    // Hyperlink
    "twitterLink": "//twitter.com/twitter",
    "youtubeLink": "//youtube.com/@YouTube"
}

// Change text
    document.getElementById("dataName").innerHTML = myData.name;
    document.getElementById("dataNickname").innerHTML = myData.nickname;
    document.getElementById("dataEmail").innerHTML = myData.email;
    document.getElementById("dataPhone").innerHTML = myData.phoneNumber;
    document.getElementById("dataAge").innerHTML = myData.age;
    document.getElementById("dataTwitter").innerHTML = myData.twitterHandle;
    document.getElementById("dataYoutube").innerHTML = myData.youtubeHandle;
// End Change text

// Change Hyperlink
    document.getElementById("dataTwitter").href = myData.twitterLink;
    document.getElementById("dataYoutube").href = myData.youtubeLink;
// End Change Hyperlink