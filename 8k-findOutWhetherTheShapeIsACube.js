/* Parameters, returns, examples
- Given a volume and side, check whether the shape is a perfect cube
- Return true or false
- (27, 3) returns true
  (-8, 2) returns false
  (100, 6) returns false
*/

/* Pseudocode walkthrough
- Check whether either parameter is negative, which would make the shape invalid and return false
- Else, check whether the side cubed is equal to the volume (as a cube is)
- Else, return false
*/

var cubeChecker = function(volume, side) {
  if (volume <= 0 || side <= 0) {
    return false
  } else if (side ** 3 === volume) {
    return true;
  } else {
  return false;
  }
};

/* Reflection
- Could have used ternary to compact conditionals, perhaps a nested ternary
*/
