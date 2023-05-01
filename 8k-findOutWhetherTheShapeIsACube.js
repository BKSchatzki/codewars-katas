// This function checks whether given a volume and a side, whether the shape is a perfect cube.
// First, I checked whether any arguemnts are invalid.
// Then, I checked whether the side cubed was equal to the volume.

var cubeChecker = function(volume, side) {
  if (volume <= 0 || side <= 0) {
    return false
  } else if (side ** 3 === volume) {
    return true;
  } else {
  return false;
  }
};

// I used a simple set of conditions to do this one. If I were to do it again, I would:
  // Use a ternary to compact the else-if and else statements.
  // Try working backwards by cube rooting the volume.
  // Find a way to build error check into the basic logic.
