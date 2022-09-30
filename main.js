var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://imgk.timesnownews.com/story/Virat_Kohli_T20_PTI.jpg", "https://www.sportsnet.ca/wp-content/uploads/2020/02/Lionel-Messi-Barcelona.jpg" , "https://i.pinimg.com/736x/22/4a/50/224a506a3fd1e1d0f681356af0f21d4f.jpg"];
var names = ["Famaily Book","Virat Kohli", "Messi", "Ronaldo"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 3
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [images[i]];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [names[i]];

    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
