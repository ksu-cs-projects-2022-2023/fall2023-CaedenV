namespace WeReaderApp
{
    partial class uxShelves
    {
        /// <summary> 
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary> 
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Component Designer generated code

        /// <summary> 
        /// Required method for Designer support - do not modify 
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            this.uxListTabs = new System.Windows.Forms.TabControl();
            this.uxOwnedPage = new System.Windows.Forms.TabPage();
            this.uxWishlistPage = new System.Windows.Forms.TabPage();
            this.imageList1 = new System.Windows.Forms.ImageList(this.components);
            this.uxListTabs.SuspendLayout();
            this.SuspendLayout();
            // 
            // uxListTabs
            // 
            this.uxListTabs.Controls.Add(this.uxOwnedPage);
            this.uxListTabs.Controls.Add(this.uxWishlistPage);
            this.uxListTabs.Dock = System.Windows.Forms.DockStyle.Fill;
            this.uxListTabs.Font = new System.Drawing.Font("Cambria", 18F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.uxListTabs.Location = new System.Drawing.Point(0, 0);
            this.uxListTabs.Multiline = true;
            this.uxListTabs.Name = "uxListTabs";
            this.uxListTabs.SelectedIndex = 0;
            this.uxListTabs.Size = new System.Drawing.Size(987, 534);
            this.uxListTabs.TabIndex = 0;
            this.uxListTabs.TabStop = false;
            // 
            // uxOwnedPage
            // 
            this.uxOwnedPage.BackColor = System.Drawing.Color.Ivory;
            this.uxOwnedPage.ForeColor = System.Drawing.Color.MediumPurple;
            this.uxOwnedPage.Location = new System.Drawing.Point(4, 37);
            this.uxOwnedPage.Margin = new System.Windows.Forms.Padding(0);
            this.uxOwnedPage.Name = "uxOwnedPage";
            this.uxOwnedPage.Size = new System.Drawing.Size(979, 493);
            this.uxOwnedPage.TabIndex = 0;
            this.uxOwnedPage.Text = "Owned";
            // 
            // uxWishlistPage
            // 
            this.uxWishlistPage.BackColor = System.Drawing.Color.Ivory;
            this.uxWishlistPage.ForeColor = System.Drawing.Color.MediumPurple;
            this.uxWishlistPage.Location = new System.Drawing.Point(4, 23);
            this.uxWishlistPage.Margin = new System.Windows.Forms.Padding(0);
            this.uxWishlistPage.Name = "uxWishlistPage";
            this.uxWishlistPage.Size = new System.Drawing.Size(493, 402);
            this.uxWishlistPage.TabIndex = 1;
            this.uxWishlistPage.Text = "Wishlist";
            // 
            // imageList1
            // 
            this.imageList1.ColorDepth = System.Windows.Forms.ColorDepth.Depth8Bit;
            this.imageList1.ImageSize = new System.Drawing.Size(16, 16);
            this.imageList1.TransparentColor = System.Drawing.Color.Transparent;
            // 
            // uxShelves
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 15F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.Ivory;
            this.Controls.Add(this.uxListTabs);
            this.Name = "uxShelves";
            this.Size = new System.Drawing.Size(987, 534);
            this.uxListTabs.ResumeLayout(false);
            this.ResumeLayout(false);

        }

        #endregion

        private TabControl uxListTabs;
        private TabPage uxOwnedPage;
        private TabPage uxWishlistPage;
        private ImageList imageList1;
    }
}
