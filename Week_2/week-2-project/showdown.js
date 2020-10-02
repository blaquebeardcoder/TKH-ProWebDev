function fight() {
    const monster = promt("what is your name", "");
    let villainHealth = 50
    let heroHealth = 50
    while (villainHealth > 0 && heroHealth > 0) {

        const maxNum = 20
        const villainDiceRoll = Math.ceil(Math.random() * maxNum)
        const heroDiceRoll = Math.ceil(Math.random() * maxNum)
         console.log(`${villainDiceRoll} ${heroDiceRoll}`)
        if (villainDiceRoll >= 1 && villainDiceRoll <= 2) {
            villainHealth = villainHealth - 5
        } else if (villainDiceRoll >= 3 && villainDiceRoll <= 10) {
           
        } else if (villainDiceRoll >= 11 && villainDiceRoll <= 18) {
            heroHealth = heroHealth - 10
        } else if (villainDiceRoll >= 19 && villainDiceRoll <= 20) {
            heroHealth = heroHealth - 20
        }
        if (heroDiceRoll >= 1 && heroDiceRoll <= 2) {
            heroHealth = heroHealth - 5
        } else if (heroDiceRoll >= 3 && heroDiceRoll <= 10) {
           
        } else if (heroDiceRoll >= 11 && heroDiceRoll <= 18) {
            villainHealth = villainHealth - 10
        } else if (heroDiceRoll >= 19 && heroDiceRoll <= 20) {
            villainHealth = villainHealth - 20
        }
         console.log(villainHealth, heroHealth)
         alert("Your updated status!")
    }
    if (villainHealth <= 0 && heroHealth <= 0) {
        return "They both are dead!"
    }
    if (villainHealth <= 0 && heroHealth > 0) {
        return "The villain is dead!"
    }
    if (villainHealth > 0 && heroHealth <= 0) {
        return "The hero is dead!"
    }
 }
 console.log(fight())