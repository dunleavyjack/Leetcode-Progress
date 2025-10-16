package solutions

type TreeNode struct {
	Left  *TreeNode
	Right *TreeNode
	Val   int
}

func isSameTree(p *TreeNode, q *TreeNode) bool {
	if p == nil && q == nil {
		return true
	}

	if p == nil || q == nil || p.Val != q.Val {
		return false
	}

	return isSameTree(p.Left, q.Left) && isSameTree(q.Right, p.Right)
}
