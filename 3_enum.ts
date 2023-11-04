// ENUM - списки

// 1) Standard ENUM
enum Membership {
    Simple,    // index 0
    Standart,  // index 1
    Premium   // index 2
}

const membership = Membership.Standart;
const membershipReverse = Membership[2];
console.log("Membership: ", membership);
console.log("Reverse membership: ", membershipReverse);
// membership = 1
// membershipReverse = Premium

// 2) ENUM with Values

enum SocialMedia {
    VK = "Vkontakte",
    FACEBOOK = 'Facebook',
    INSTAGRAM = 'Instagram'
}

const VK = SocialMedia.VK;
console.log('VK: ', VK);
