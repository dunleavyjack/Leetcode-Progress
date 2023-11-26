class Solution {
    public int kthFactor(int n, int k) {
        int curr = 1;
        while (curr <= n){
          if(n % curr == 0){
            k--;
            if(k == 0){
              return curr;
             }
            }
            curr++;
        }
        
        return -1;
    }
}