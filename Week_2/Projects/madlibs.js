function madlib(){
    let playerInput = prompt("Would you like storyone or storytwo?");
    if (playerInput === "storyone"){
        storyOne();
    } else {
        storyTwo();
    }
    function storyOne() {
      let adj1 = prompt("type an adjective", "");
      let place = prompt("type a general place", "");
      let vehicle = prompt("type a vehicle name (plural)", "");
      let game = prompt("type the name of a game", "");
      let pnoun = prompt("type a plural noun", "");
      let verbing1 = prompt("type an 'ing' verb", "");
      let verbing2 = prompt("type another 'ing' verb", "");
      let pfood = prompt("type a food name (plural)", "");
      let sport = prompt("type the name of a sport", "");
      let verbing3 = prompt("type another 'ing' verb", "");
      let emotion = prompt("type an emotion", "");
      let num = prompt("type a number", "");
      
      let storyLib1 = alert(`A vacation is when you take a trip to some '${adj1}' place near an amazing '${place}'. A good vacation place is one where you can ride '${vehicle}' or play '${game}' or go hunting for '${pnoun}'. I like to spend my time '${verbing1}' or '${verbing2}'. When parents go on a vacation, they spend their time eating three '${pfood}' a day. Usually, fathers play '${sport}', and mothers spend their time '${verbing3}'. Adults need vacations more than kids because adults are always very '${emotion}' because they have to work '${num}' hours every day all year just to afford their vacations!`);
}
    function storyTwo() {
        let adjective2 = prompt("type an adjective");
        let place2 = prompt("type a famous place");
        let pnoun2 = prompt("type a plural noun");
        let adj2 = prompt("type another adjective");
        let pfood2 = prompt("type a food (plural)");
        let emotion2 = prompt("type an emotion");
        let verbing4 = prompt("type an 'ing' verb");
        let place3 = prompt("type a common place");
        let adj3 = prompt("type another adjective");
        let noun3 = prompt("type a noun");
        let adj4 = prompt("type another adjective");
        let noun4 = prompt("type another noun");
        let fam = prompt("type a family member");
        let adj5 = prompt("type another adjective");
        
        let storyLib2 = alert(`Today we took a '${adjective2}' fieldtrip to '${place2}'. They're famous for making '${pnoun2}' cooking '${adj2}' '${pfood2}'. Eating all that food mad made me feel '${emotion2}'. Next we enjoyed the local tradition of '${verbing4}' in the middle of the '${place3}'! Finally, we went shopping for souvenirs. I bought a '${adj3}' '${noun3}' for myself, and a '${adj4}' '${noun4}' for my favorite '${fam}'. I'll definitely never forget this '${adj5}' trip!`)
}
}
madlib();