public class FindElements
{
    private HashSet<int> uniqueNodeValues;

    private void CleanTree(TreeNode root, int x, int additional)
    {
        if (root == null)
            return;

        root.val = 2 * x + additional;
        this.uniqueNodeValues.Add(root.val);

        this.CleanTree(root.left, root.val, 1);
        this.CleanTree(root.right, root.val, 2);
    }

    public FindElements(TreeNode root)
    {
        this.uniqueNodeValues = new HashSet<int>();
        this.CleanTree(root, 0, 0);
    }

    public bool Find(int target)
    {
        return this.uniqueNodeValues.Contains(target);
    }
}
