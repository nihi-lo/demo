package portalclient

import (
	"context"
)

type Client struct {
	ctx context.Context
}

func NewClient() *Client {
	return &Client{}
}

func (a *Client) SetContext(ctx context.Context) {
	a.ctx = ctx
}
