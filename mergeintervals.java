//Java Solution

class Solution {
    
    public class IntComparator implements Comparator<int[]> {
        public int compare(int[] a, int[] b) {
            return a[0] < b[0] ? -1 : a[0] == b[0] ? 0 : 1;
        }
    }
    
    public int[][] merge(int[][] intervals) {
        if (intervals.length <= 1) {
            return intervals;
        }
        
        LinkedList<int[]> result = new LinkedList<>();
        Collections.sort(Arrays.asList(intervals), new IntComparator());
        result.add(intervals[0]);
        
        for (int i = 1; i < intervals.length; i++) {
            int[] recent = result.get(result.size() - 1);
            if (recent[1] >= intervals[i][0]) {
                recent[1] = Math.max(recent[1], intervals[i][1]);
            } else {
                result.add(intervals[i]);
            }
        }
        
        return result.toArray(new int[result.size()][]);
    }
}